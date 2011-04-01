App.views.nouns_toolbar = Ext.extend(Ext.Toolbar, {
    title: "Nouns",
    items: [
        {
            id: 'back_button',
            text: 'back',
            ui: 'back',
            hidden: true,
            handler: function() {
                window.history.back();
            }
        },
        {xtype: 'spacer'},
        {
            xtype: 'segmentedbutton',
            items: [
                {
                    id: 'prev_noun_letter_button',
                    iconCls: 'arrow_up',
                    iconMask: true
                },
                {
                    id: 'next_noun_letter_button',
                    iconCls: 'arrow_down',
                    iconMask: true
                }
            ]
        }
    ],
    showBackButton: function() {
        var prevButton = Ext.getCmp("prev_noun_letter_button"),
            nextButton = Ext.getCmp("next_noun_letter_button"),
            backButton = Ext.getCmp("back_button");

        prevButton.hide();
        nextButton.hide();
        backButton.show();
    },

    setupScrollerButtons: function(letter) {
        var prevButton = Ext.getCmp("prev_noun_letter_button"),
            nextButton = Ext.getCmp("next_noun_letter_button"),
            backButton = Ext.getCmp("back_button"),
            alphabet = "abcdefghijklmnopqrstuvwxyz",
            prevLetterIndex, nextLetterIndex, currentLetterIndex;

        currentLetterIndex = alphabet.indexOf(letter);
        prevLetterIndex = currentLetterIndex - 1;
        nextLetterIndex = currentLetterIndex + 1;

        prevButton.show();
        nextButton.show();
        backButton.hide();

        prevButton.handler = function() {
            Ext.dispatch({
                controller: "nouns",
                action    : "index",
                letter    : alphabet[prevLetterIndex],
                historyUrl: "nouns/by/" + alphabet[prevLetterIndex]
            });
        }
        nextButton.handler = function() {
            Ext.dispatch({
                controller: "nouns",
                action    : "index",
                letter    : alphabet[nextLetterIndex],
                historyUrl: "nouns/by/" + alphabet[nextLetterIndex]
            });
        }
    }
});
Ext.reg('nounscardtoolbar', App.views.nouns_toolbar);

App.views.NounsCard = Ext.extend(Ext.Panel, {
    title: "nouns",
    iconCls: "datum",
    layout: "card",
    initComponent: function() {
        Ext.apply(this, {
            dockedItems: [
                { xtype: 'nounscardtoolbar', id: 'nouns_toolbar' }
            ],
            items: [
                { xtype: 'nounslist', id: 'nouns_list' },
                App.views.noun_detail_card
            ]
        });
        App.views.NounsCard.superclass.initComponent.apply(this, arguments);
    }

});

Ext.reg('nounscard', App.views.NounsCard);
