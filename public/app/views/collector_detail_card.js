App.views.CollectorDetailCard = Ext.extend(Ext.DataView, {
    title: "detail",
    cls: "collector_detail",
    scroll: "vertical",
    initComponent: function() {
        Ext.apply(this, {
            tpl: Ext.XTemplate.from("noun_detail"),
            itemSelector: 'a.noun',
            store: App.stores.collector_detail
        });
        App.views.CollectorDetailCard.superclass.initComponent.apply(this, arguments);
    }
});

