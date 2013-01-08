Ext.define('LuckyDraw.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'LuckyDraw.view.OptionsList',
        'LuckyDraw.view.DrawPage',
        'LuckyDraw.view.AboutPage',
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
                xtype: 'OptionsList',
                cls: 'tabOptions'
            },
            {
                xtype: 'DrawPage',
                cls: 'tabDraw'             
            },
            {
                xtype: 'AboutPage',
                cls: 'tabAbout'
            }
        ]
    }
});
