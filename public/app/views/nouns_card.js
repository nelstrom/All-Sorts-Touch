App.views.nouns_toolbar = new Ext.Toolbar({
    title: "Nouns",
    items: [
        {xtype: 'spacer'},
        {
            xtype: 'segmentedbutton',
            items: [
                {
                    id: 'prev_noun_letter_button',
                    iconCls: 'arrow_up',
                    iconMask: true,
                    handler: function() {
                        console.log("one pressed");
                    }
                },
                {
                    id: 'next_noun_letter_button',
                    iconCls: 'arrow_down',
                    iconMask: true,
                    handler: function() {
                        console.log("two pressed");
                    }
                },
            ]
        }
    ]
});

App.views.NounsCard = Ext.extend(Ext.Panel, {
    title: "nouns",
    iconCls: "datum",
    layout: "card",
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [App.views.nouns_toolbar],
            items: [
                App.views.noun_list,
                App.views.noun_detail_card
            ]
        });
        App.views.NounsCard.superclass.initComponent.apply(this, arguments);
    }

});
