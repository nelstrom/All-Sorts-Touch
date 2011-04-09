App.controllers.nouns = Ext.regController("nouns", {
    model: "Noun",
    currentLetter: "a",
    lastAction: null,

    album: function(options) {
        var animation = {};

        if (this.lastAction === "album") {
            animation = {type: 'slide', direction: 'left'};
        } else if (this.lastAction === "show") {
            animation = {type: 'slide', direction: 'right'};
        } else {
            animation = null;
        }

        this.lastAction = "album";
        App.views.nouns_toolbar.showButtonsForAlbumCard(this.currentLetter);
        App.views.viewport.setActiveItem(App.views.nouns_packet);
        App.views.nouns_packet.setActiveItem(App.views.nouns_album, animation);
        App.views.nouns_album.doComponentLayout();
    },

    index: function(options) {
        var letter = options.letter,
            animation = {type: 'slide', direction: 'left'};
        if (letter !== this.currentLetter) {
            if (typeof(letter) == "undefined") { letter = this.currentLetter; }
            App.stores.alphabeticised_nouns.proxy.url = App.domain + '/touch/nouns/by/'+letter+'.json'
            App.stores.alphabeticised_nouns.load();
            this.currentLetter = letter;
            if (typeof(App.views.nouns_list.scroller) != "undefined") {
                App.views.nouns_list.scroller.scrollTo({x: 0, y: 0});
            }
        }

        if (this.lastAction === "album") {
            animation = {type: 'slide', direction: 'left'};
        } else if (this.lastAction === "show") {
            animation = {type: 'slide', direction: 'right'};
        } else {
            animation = null;
        }

        this.lastAction = "index";
        App.views.nouns_toolbar.showButtonsForListCard(this.currentLetter);
        // Note: activate viewport THEN nouns_packet (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nouns_packet);
        App.views.nouns_packet.setActiveItem(App.views.nouns_list, animation);
        App.views.nouns_list.doComponentLayout();
    },

    show: function(options) {
        var animation = {};
        App.stores.noun_detail.proxy.url = App.domain + "/touch/nouns/" + options.slug + ".json";
        App.stores.noun_detail.load();

        if (this.lastAction === "index") {
            animation = {type: 'slide', direction: 'left'};
        } else {
            animation = null;
        }

        this.lastAction = "show";
        App.views.nouns_toolbar.showButtonsForDetailCard();
        // Note: activate viewport THEN nouns_packet (other way doesn't work)
        App.views.viewport.setActiveItem(App.views.nouns_packet);
        App.views.nouns_packet.setActiveItem(App.views.noun_detail, animation);
        App.views.noun_detail.doComponentLayout();
    }


});
