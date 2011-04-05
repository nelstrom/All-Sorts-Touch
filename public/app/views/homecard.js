App.views.Homecard = Ext.extend(Ext.DataView, {
    title: "home",
    iconCls: "home",
    cls: "homecard",
    scroll: 'vertical',
    initComponent: function() {
        Ext.apply(this, {
            tpl: Ext.XTemplate.from("homecard-list"),
            itemSelector: 'a.noun',
            store: App.stores.home
        });
        App.views.Homecard.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('homecard', App.views.Homecard);
