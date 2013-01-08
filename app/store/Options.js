Ext.define('LuckyDraw.store.Options', {
	extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
	config: {        
        model: 'LuckyDraw.model.Option',
        storeId: 'Options',
        pageSize: 20,
        //autoLoad: true,
        sorters: [
            {property: 'timestamp', direction: 'DESC'}
        ],

        //Custom config
        selected: 0
    }
    
});