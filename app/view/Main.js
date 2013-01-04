Ext.define('LuckyDraw.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'LuckyDraw.view.OptionsList'
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
                            '<p>This application is a product of ',
                                '<a href="http://84way.com">84way</a>',
                            'team</p>'
                        ].join(" ")
                    }
                ]
            }
        ]
    }
});
