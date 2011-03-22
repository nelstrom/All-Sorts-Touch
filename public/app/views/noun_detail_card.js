App.views.NounDetailCard = Ext.extend(Ext.DataView, {
    title: "detail",
    cls: "noun_detail",
    scroll: "vertical",
    initComponent: function() {
        Ext.apply(this, {
            tpl: Ext.XTemplate.from("noun_detail"),
            itemSelector: 'a.noun',
            store: App.noun_detail
        });
        App.views.NounDetailCard.superclass.initComponent.apply(this, arguments);
    }
});
