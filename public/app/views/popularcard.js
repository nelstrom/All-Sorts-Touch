App.views.Popularcard = Ext.extend(Ext.DataView, {
    title: "popular",
    iconCls: "star",
    cls: "homecard",
    scroll: "vertical",
    initComponent: function() {
        Ext.apply(this, {
            tpl: Ext.XTemplate.from("homecard-list"),
            itemSelector: 'a.noun',
            store: App.popular_store
        });
        App.views.Popularcard.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('popularcard', App.views.Popularcard);
