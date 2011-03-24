Ext.regController("nouns", {
    model: "Noun",
    currentLetter: "a",

    index: function(options) {
        var letter = options.letter;
        if (typeof(letter) != "undefined" && letter != this.currentLetter) {
            App.alphabeticised_nouns.proxy.url = App.domain + '/touch/nouns/by/'+letter+'.json'
            App.alphabeticised_nouns.load();
            this.currentLetter = letter;
            if (typeof(App.views.noun_list.scroller) != "undefined") {
                App.views.noun_list.scroller.scrollTo({x: 0, y: 0});
            }
        }

        App.views.nouns_toolbar.setupScrollerButtons(this.currentLetter);
        // Note: activate viewport THEN nounscard (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nounscard);
        App.views.nounscard.setActiveItem(App.views.noun_list);
    },

    show: function(options) {
        App.noun_detail.proxy.url = App.domain + "/touch/nouns/" + options.slug + ".json";
        App.noun_detail.load();
        App.views.nouns_toolbar.showBackButton();
        // Note: activate viewport THEN nounscard (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nounscard);
        App.views.nounscard.setActiveItem(App.views.noun_detail_card);
    },



});
