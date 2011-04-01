var App = new Ext.Application({
    name:                 'AllSorts',
    domain:               'http://all-sorts.org',
    defaultUrl:           'home',

    tabletStartupScreen:  'images/tablet_startup.png',
    phoneStartupScreen:   'images/phone_startup.png',
    icon:                 'images/icon.png',
    glossOnIcon:          false,

    launch: function() {

        this.views.noun_detail_card = new this.views.NounDetailCard();

        this.views.collector_detail_card = new this.views.CollectorDetailCard();
        this.views.collectorslist = new this.views.Collectorslist();

        this.views.viewport = new this.views.Viewport();

        this.views.homecard = this.views.viewport.getComponent('home');
        this.views.homecard.tab.handler = function() {
            Ext.dispatch({
                controller: "home",
                action    : "index",
                historyUrl: "home"
            });
        };

        this.views.nounscard = this.views.viewport.getComponent('nouns');
        this.views.nouns_toolbar = this.views.nounscard.getComponent('nouns_toolbar');
        this.views.noun_list = this.views.nounscard.getComponent('nouns_list');
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

        this.views.popularcard = this.views.viewport.getComponent('popular');
        this.views.popularcard.tab.handler = function() {
            Ext.dispatch({
                controller: "home",
                action    : "popular",
                historyUrl: "popular"
            });
        };
    }
});
