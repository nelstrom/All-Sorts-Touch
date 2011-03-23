Ext.regController("nouns", {
    model: "Noun",
    currentLetter: "a",

    index: function(options) {
        var letter = options.letter;
        if (typeof(letter) != "undefined") {
            App.alphabeticised_nouns.proxy.url = App.domain + '/touch/nouns/by/'+letter+'.json'
            App.alphabeticised_nouns.load();
            this.updateButtons(letter);
            this.currentLetter = letter;
        } else {
            this.updateButtons(this.currentLetter);
        }

        // Note: activate viewport THEN nounscard (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nounscard);
        App.views.nounscard.setActiveItem(App.views.noun_list);
    },

    show: function(options) {
        App.noun_detail.proxy.url = App.domain + "/touch/nouns/" + options.slug + ".json";
        App.noun_detail.load();
        this.hideButtons();
        // Note: activate viewport THEN nounscard (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nounscard);
        App.views.nounscard.setActiveItem(App.views.noun_detail_card);
    },

    hideButtons: function() {
        var prevButton = Ext.getCmp("prev_noun_letter_button"),
            nextButton = Ext.getCmp("next_noun_letter_button");
        prevButton.hide();
        nextButton.hide();
    },

    updateButtons: function(letter) {
        var prevButton = Ext.getCmp("prev_noun_letter_button"),
            nextButton = Ext.getCmp("next_noun_letter_button"),
            alphabet = "abcdefghijklmnopqrstuvwxyz",
            prevLetterIndex, nextLetterIndex, currentLetterIndex;

        currentLetterIndex = alphabet.indexOf(letter);
        prevLetterIndex = currentLetterIndex - 1;
        nextLetterIndex = currentLetterIndex + 1;

        prevButton.show();
        nextButton.show();

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
