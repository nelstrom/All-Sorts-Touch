App.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    ui: 'light',
    tabBar: {
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    dock: 'bottom',
    cardSwitchAnimation: {
        type: 'fade',
        duration: 10
    },
    initComponent: function() {
        Ext.apply(this, {
            items: [
                { xtype: 'homecard', id: 'home' },
                { xtype: 'popularcard', id: 'popular' },
                { xtype: 'nouns_packet', id: 'nouns_packet' },
                App.views.collectorslist
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
