Ext.define('LuckyDraw.store.Options', {
	extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
	config: {        
        model: 'LuckyDraw.model.Option',
        storeId: 'Options',
        pageSize: 20,
        //autoLoad: true,
        sorters: [
            {property: 'selected', direction: 'DESC'},
            {property: 'timestamp', direction: 'DESC'}
        ]
    },

    getSelected: function(){
        var l = this.getAllCount();
        var result = 0;
        for( var i = 0; i < l; i++ ) {
            if( this.getAt(i).get('selected') ) {
                result++;
            }
        };
        return result;
    }
    
});