App.views.nouns_toolbar = Ext.extend(Ext.Toolbar, {
    initComponent: function() {
        Ext.apply(this, {
            title: "Nouns",
            items: [
                {
                    id: 'album_button',
                    text: 'album',
                    ui: 'back',
                    hidden: true,
                    handler: function() {
                        Ext.dispatch({
                            controller: "nouns",
                            action    : "album",
                            historyUrl: "nouns"
                        });
                    }
                },
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

            showButtonsForDetailCard: function() {
                var prevButton = Ext.getCmp("prev_noun_letter_button"),
                    nextButton = Ext.getCmp("next_noun_letter_button"),
                    albumButton = Ext.getCmp("album_button"),
                    backButton = Ext.getCmp("back_button");

                prevButton.hide();
                nextButton.hide();
                albumButton.hide();
                backButton.show();
            },

            showButtonsForAlbumCard: function(letter) {
                var prevButton = Ext.getCmp("prev_noun_letter_button"),
                    nextButton = Ext.getCmp("next_noun_letter_button"),
                    albumButton = Ext.getCmp("album_button"),
                    backButton = Ext.getCmp("back_button");
                prevButton.hide();
                nextButton.hide();
                albumButton.hide();
                backButton.hide();
            },

            showButtonsForListCard: function(letter) {
                var prevButton = Ext.getCmp("prev_noun_letter_button"),
                    nextButton = Ext.getCmp("next_noun_letter_button"),
                    backButton = Ext.getCmp("back_button"),
                    albumButton = Ext.getCmp("album_button"),
                    alphabet = "abcdefghijklmnopqrstuvwxyz",
                    prevLetterIndex, nextLetterIndex, currentLetterIndex;

                currentLetterIndex = alphabet.indexOf(letter);
                prevLetterIndex = currentLetterIndex - 1;
                nextLetterIndex = currentLetterIndex + 1;

                prevButton.show();
                nextButton.show();
                albumButton.show();
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
        App.views.nouns_toolbar.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('nounscardtoolbar', App.views.nouns_toolbar);
