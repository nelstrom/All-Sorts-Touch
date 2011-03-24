App = new Ext.Application({
    name:                 'AllSorts',
    domain:               'http://all-sorts.org',
    defaultUrl:           'home',

    tabletStartupScreen:  'images/tablet_startup.png',
    phoneStartupScreen:   'images/phone_startup.png',
    icon:                 'images/icon.png',
    glossOnIcon:          false,

    launch: function() {
        this.views.homecard = new this.views.Homecard();

        this.views.noun_detail_card = new this.views.NounDetailCard();
        this.views.noun_list = new this.views.NounsList();
        this.views.nounscard = new this.views.NounsCard();

        this.views.collector_detail_card = new this.views.CollectorDetailCard();
        this.views.collectorslist = new this.views.Collectorslist();

        this.views.popularcard = new this.views.Popularcard();
        this.views.viewport = new this.views.Viewport();

        this.views.homecard.tab.handler = function() {
            Ext.dispatch({
                controller: "home",
                action    : "index",
                historyUrl: "home"
            });
        };

        this.views.nounscard.tab.handler = function() {
            Ext.dispatch({
                controller: "nouns",
                action    : "index",
                historyUrl: "nouns"
            });
        };

        this.views.collectorslist.tab.handler = function() {
            Ext.dispatch({
                controller: "collectors",
                action    : "index",
                historyUrl: "collectors"
            });
        };

        this.views.popularcard.tab.handler = function() {
            Ext.dispatch({
                controller: "home",
                action    : "popular",
                historyUrl: "popular"
            });
        };
    }
});
