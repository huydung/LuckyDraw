Ext.define('LuckyDraw.view.OptionsList', {
    extend: 'Ext.Panel',
    requires:[
    	'Ext.dataview.List',
    	'Ext.layout.VBox',
    	'Ext.layout.HBox',
    	'LuckyDraw.view.widget.OptionsListItem'
    ],
    xtype: 'OptionsList',

    config: { 
    	layout: 'card',
    	iconCls: 'compose',
    	title: 'Options', 	
        items: [{
        	xtype: 'container',
        	layout: 'vbox',
        	width: '100%',
        	items: [
	        	{
	            	xtype: 'titlebar',	            
	            	docked: 'top',
	            	title: 'Options to Draw'	
	        	},
        		{
					xtype: 'textfield',
					name: 'newOptionField',
					placeHolder: 'Type & enter to add new option',
					width: '100%'
        		},
        		{
		            xtype: 'dataview',
		            store: 'Options',
		            flex: 1,
		            loadingText: 'Loading Options...',
		            grouped: false,
		            baseCls: 'optionsList',
		            itemCls: 'optionsListItem',
		            useComponents: true,
		            defaultType: 'OptionsListItem'
		        },
		        {
	        		xtype: 'container',
	        		layout: {
	        			type: 'hbox',
	        			pack: 'center'
	        		},
	        		padding: '0 0 0.3em 0',
	        		items: [	
	        			{
	        				xtype: 'label',
	        				html: 'Options: ',
	        				cls: 'item-list-actions-label',
	        				padding: '0.5em 0 0 0'
	        			},
	        			{
							xtype: 'button',
							action: 'clearOptionsList',
							text: 'Clear',
							margin: 2,
							labelCls: 'sub-button-label',
							cls: 'sub-button-clear',
	        				ui: 'small',
	        				width: '16%'
						},	        		
						{
							xtype: 'button',
							text: 'Save',
							margin: 2,
							labelCls: 'sub-button-label',
							cls: 'sub-button-save',
	        				ui: 'small',
	        				width: '16%'
						},
						{
							xtype: 'button',
							//iconMask: true,
							//iconCls: 'search',
							text: 'Load',
							margin: 2,
							labelCls: 'sub-button-label',
							cls: 'sub-button-load',
	        				ui: 'small',
	        				width: '16%'
						},
						{
							xtype: 'button',
							//iconMask: true,
							//iconCls: 'settings',
							text: 'Generate',
							margin: 2,
							labelCls: 'sub-button-label',
							cls: 'sub-button-generate',
	        				ui: 'small',
	        				width: '22%'
						}
		        	]        	
        		}
        	]
        	
        }],
        listeners: [{
            delegate: '#actionsButton',
            event: 'tap',
            fn: 'onActionsButtonTap'
        }]
    },    
    onActionsButtonTap: function () {
        console.log('Actions Button tapped');
    }
});