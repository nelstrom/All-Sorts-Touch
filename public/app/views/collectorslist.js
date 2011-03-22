App.views.Collectorslist = Ext.extend(Ext.Panel, {
    title: "collectors",
    iconCls: "data",
    dockedItems: [{xtype: 'toolbar',title: 'Collective nouns'}],
    initComponent: function() {
        Ext.apply(this, {
            items: [
                App.views.collector_detail_card
            ]
        });
        App.views.Collectorslist.superclass.initComponent.apply(this, arguments);
    }
});
