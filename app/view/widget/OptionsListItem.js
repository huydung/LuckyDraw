Ext.define('LuckyDraw.view.widget.OptionsListItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button', 'Ext.Label', 'Ext.MessageBox'],
    xtype: 'OptionsListItem',

    config: {
    	delButton: true,
    	nameLabel: {
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
        button.setIconMask(true);
    	return button;
    },

    updateDelButton: function(newButton, oldButton) {
    	if( newButton ) { 
    		this.add(newButton);
    	};
    	if( oldButton ) {
    		this.remove(oldButton);
    	}
    },
    applyNameLabel: function(config) {    	
        return Ext.factory(config, Ext.Label, '');
    },
    updateNameLabel: function(newLabel, oldLabel) {
        var record = this.getRecord();
        console.log('updateName for DataListItem called, record.selected = '+record.get('selected')+'!');
    	if( newLabel ) { 
    		this.add(newLabel);
    	};
    	if( oldLabel ) {
    		this.remove(oldLabel);
    	}
    },
    updateRecord: function(record, oldRecord) {
        console.log('updateRecord called');
        if( record.get('selected') ){
            this.getDelButton()
                .setIconCls('favorites')
                .setUi('action-small');
            this.getNameLabel()
                .setHtml('<span class="option-selected">'+record.get('name')+'</span>');
        } else {
            this.getDelButton()
                .setIconCls('delete')
                .setUi('decline-small');
            this.getNameLabel()
                .setHtml(record.get('name'));
        }
        this.callParent(record);
    }
});