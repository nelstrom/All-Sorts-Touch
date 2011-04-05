App.controllers.nouns = Ext.regController("nouns", {
    model: "Noun",
    currentLetter: "a",

    album: function(options) {
        App.views.viewport.setActiveItem(App.views.nouns_packet);
        App.views.nouns_packet.setActiveItem(App.views.nouns_album);
        App.views.nouns_album.doComponentLayout();
    },

    index: function(options) {
        var letter = options.letter;
        if (letter !== this.currentLetter) {
            if (typeof(letter) == "undefined") { letter = this.currentLetter; }
            App.stores.alphabeticised_nouns.proxy.url = App.domain + '/touch/nouns/by/'+letter+'.json'
            App.stores.alphabeticised_nouns.load();
            this.currentLetter = letter;
            if (typeof(App.views.nouns_list.scroller) != "undefined") {
                App.views.nouns_list.scroller.scrollTo({x: 0, y: 0});
            }
        }

        App.views.nouns_toolbar.setupScrollerButtons(this.currentLetter);
        // Note: activate viewport THEN nouns_packet (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nouns_packet);
        App.views.nouns_packet.setActiveItem(App.views.nouns_list);
        App.views.nouns_list.doComponentLayout();
    },

    show: function(options) {
        App.stores.noun_detail.proxy.url = App.domain + "/touch/nouns/" + options.slug + ".json";
        App.stores.noun_detail.load();
        App.views.nouns_toolbar.showBackButton();
        // Note: activate viewport THEN nouns_packet (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nouns_packet);
        App.views.nouns_packet.setActiveItem(App.views.noun_detail);
        App.views.noun_detail.doComponentLayout();
    }


});
