App.views.NounsPacket = Ext.extend(Ext.Panel, {
    title: "nouns",
    iconCls: "datum",
    layout: {
        type: "card",
        align: "stretch",
    },
    dockedItems: [
        { xtype: 'nounscardtoolbar', id: 'nouns_toolbar' }
    ],
    items: [
        { xtype: 'nouns_album', id: 'nouns_album' },
        { xtype: 'nouns_list', id: 'nouns_list' },
        { xtype: 'noun_detail', id: 'noun_detail' },
    ]
});

Ext.reg('nouns_packet', App.views.NounsPacket);
