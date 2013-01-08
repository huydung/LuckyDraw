Ext.define('LuckyDraw.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'LuckyDraw.view.OptionsList',
        'Ext.data.Store',
        'LuckyDraw.store.Options'
    ],
    config: {

        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        items: [
            {
                xtype: 'OptionsList'
            },
            {
                title: 'Draw!',
                iconCls: 'team',
                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Draw the Lucky Winner!'
                    }  
                ]              
            },
            {
                title: 'Info',
                iconCls: 'info',
                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'About'
                    },
                    {
                        xtype: 'label',
                        centered: true,
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
