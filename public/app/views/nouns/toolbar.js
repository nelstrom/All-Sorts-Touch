App.views.nouns_toolbar = Ext.extend(Ext.Toolbar, {
    initComponent: function() {
        Ext.apply(this, {
            title: "Nouns",
            buttons: {},
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

            setupButtons: function() {
                this.buttons.prev = Ext.getCmp("prev_noun_letter_button");
                this.buttons.next = Ext.getCmp("next_noun_letter_button");
                this.buttons.back = Ext.getCmp("back_button");
                this.buttons.album = Ext.getCmp("album_button");
            },

            showButtonsForDetailCard: function() {
                this.setupButtons();

                this.buttons.prev.hide();
                this.buttons.next.hide();
                this.buttons.album.hide();
                this.buttons.back.show();
            },

            showButtonsForAlbumCard: function(letter) {
                this.setupButtons();

                this.buttons.prev.hide();
                this.buttons.next.hide();
                this.buttons.album.hide();
                this.buttons.back.hide();
            },

            showButtonsForListCard: function(letter) {
                var alphabet = "abcdefghijklmnopqrstuvwxyz",
                    prevLetterIndex, nextLetterIndex, currentLetterIndex;

                currentLetterIndex = alphabet.indexOf(letter);
                prevLetterIndex = currentLetterIndex - 1;
                nextLetterIndex = currentLetterIndex + 1;

                this.setupButtons();

                this.buttons.prev.show();
                this.buttons.next.show();
                this.buttons.album.show();
                this.buttons.back.hide();

                this.buttons.prev.handler = function() {
                    Ext.dispatch({
                        controller: "nouns",
                        action    : "index",
                        letter    : alphabet[prevLetterIndex],
                        historyUrl: "nouns/by/" + alphabet[prevLetterIndex]
                    });
                }
                this.buttons.next.handler = function() {
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
