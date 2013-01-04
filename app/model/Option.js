Ext.define('LuckyDraw.model.Option', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.proxy.LocalStorage', 'Ext.data.identifier.Uuid'],
    config: {
        identifier:'uuid',
        fields: [
        	{name: 'id', type: 'int' },
            {name: 'name', type: 'string'},
            {name: 'selected', type: 'boolean'},
            {name: 'timestamp', type: 'date'}
        ],
        validations: [
        	{type: 'length', field: 'name', min: 2, max: 35}
        ],
        proxy: {
            type: 'localstorage',
            id: 'LuckyDrawOptions'
        }
    }
});