Ext.define('LuckyDraw.view.widget.OptionsListItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button', 'Ext.Label', 'Ext.MessageBox'],
    xtype: 'OptionsListItem',

    config: {
    	dataMap: {
    		getName: {
    			setHtml: 'name'
    		}
    	},
    	delButton: true,
    	name: {
    		cls: 'x-name',
    		flex: 3
    	},
    	layout: {
    		type: 'hbox',
    		align: 'start'
    	}
    },
    applyDelButton: function(config) {
    	var button = Ext.factory(config, Ext.Button, this.getDelButton());
    	button.setIconCls('delete');
    	button.setIconMask(true);
    	button.setUi('decline-small');
    	button.on('tap', this.onDelButtonTap, this);
    	return button;
    },
    onDelButtonTap: function(button, event) {
    	var record = this.getRecord();
        var store = Ext.getStore('Options');
        store.remove(record);
        store.sync();
    },
    updateDelButton: function(newButton, oldButton) {
    	if( newButton ) { 
    		this.add(newButton);
    	};
    	if( oldButton ) {
    		this.remove(oldButton);
    	}
    },
    applyName: function(config) {
    	var label = Ext.factory(config, Ext.Label, this.getName());
    	return label;
    },
    updateName: function(newLabel, oldLabel) {
    	if( newLabel ) { 
    		this.add(newLabel);
    	};
    	if( oldLabel ) {
    		this.remove(oldLabel);
    	}
    }
});