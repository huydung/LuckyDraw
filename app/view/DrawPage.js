Ext.define('LuckyDraw.view.DrawPage', {
    extend: 'Ext.Panel',
    requires:[
    	'Ext.layout.VBox',
    	'Ext.layout.HBox'
    ],
    xtype: 'DrawPage',

    config: { 
    	layout: 'card',
        iconCls: 'team',
        scrollable: true,
        title: 'Choose!',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Draw the Lucky Winner!'
            },
            {
            	xtype: 'container',
            	layout: {
            		type: 'vbox'
            		//align: 'center'
            	},
            	items: [
            		{
	            		xtype: 'container',
	            		padding: '4em 0 0 0', 
	            		flex: 1,
	            		layout: {
	            			type: 'hbox',
	            			pack: 'center'
	            		},
	            		items: [		            				            		
		            		{
		            			xtype: 'container',
		            			cls: 'stat-selected',
		            			flex: 1,
		            			layout: {
		            				type: 'vbox',
		            				pack: 'center',
		            				align: 'center'
		            			},
		            			items: [
		            				{
		            					xtype: 'label',
		            					cls: 'stat-number',
		            					html: '00'
		            				},
		            				{
		            					xtype: 'label',
		            					cls: 'stat-label',
		            					html: 'winners'
		            				}
		            			]
		            		},
		            		{
		            			xtype: 'container',
		            			flex: 1,
		            			cls: 'stat-total',
		            			layout: {
		            				type: 'vbox',
		            				pack: 'center',
		            				align: 'center'
		            			},
		            			items: [
		            				{
		            					xtype: 'label',
		            					cls: 'stat-number',
		            					html: '00'
		            				},
		            				{
		            					xtype: 'label',
		            					cls: 'stat-label',
		            					html: 'options'
		            				}
		            			]
		            		}
	            		]
	            	},
	            	{
	            		xtype: 'container',
	            		flex: 2,
	            		layout: {
	            			type: 'card'
	            		},
	            		items: [
	            			{
	            				xtype: 'container',
	            				layout: {
	            					type: 'hbox',
	            					pack: 'center',
	            					align: 'center'
	            				},
	            				items: [
		            				{
		            					xtype: 'button',
										text: 'Draw new Winner',						
				        				ui: 'action-round',
				        				padding: '0.3em 0.8em',
				        				width: 'auto',
				        				cls: 'draw-button',
				        				action: 'drawNewWinner'
		            				}
	            				]	            				
	            			}
	            		]	            		
	            	}
            	]
            }
        ]    
    }
});