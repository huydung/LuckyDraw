Ext.define('LuckyDraw.view.AboutPage', {
    extend: 'Ext.Panel',
    requires:[
    	'Ext.layout.VBox',
    	'Ext.layout.HBox'
    ],
    xtype: 'AboutPage',

    config: { 
    	layout: 'card',
        title: 'Info',
        iconCls: 'info',
        scrollable: true,
        styleHtmlContent: true,
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'About'
            },
            {
            	xtype: 'container',
            	fullscreen: true,
            	layout: {
            		type: 'vbox',
            		pack: 'center',
            		align: 'center'
            	},
            	items: [
            		{
						xtype: 'label',
		                html: [
		                    '<p class="about_page">',
		                        '<em>Designed & Developed by</em><br/><br/>  ',
		                        '<a href="http://84way.com"><img id="company_logo" src="resources/logo_84way.png" /></a>',
		                        '<br/><br/><br/>',
		                        'For support, please contact <a href="mailto:support@84way.com">support@84way.com</a>',
		                    '</p>'
		                ].join(" ")
            		}
            	]                
            }
        ]  
    }
});