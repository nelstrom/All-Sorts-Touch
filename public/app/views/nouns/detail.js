App.views.NounDetail = Ext.extend(Ext.DataView, {
    title: "detail",
    cls: "noun_detail",
    scroll: "vertical",
    initComponent: function() {
        Ext.apply(this, {
            tpl: Ext.XTemplate.from("detail_page"),
            itemSelector: 'a.noun',
            store: App.stores.noun_detail
        });
        App.views.NounDetail.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('noun_detail', App.views.NounDetail);
