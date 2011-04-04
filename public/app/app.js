var App = new Ext.Application({
    name:                 'AllSorts',
    domain:               'http://all-sorts.org',
    defaultUrl:           'home',

    tabletStartupScreen:  'images/tablet_startup.png',
    phoneStartupScreen:   'images/phone_startup.png',
    icon:                 'images/icon.png',
    glossOnIcon:          false,

    launch: function() {


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

        this.views.nouns_packet = this.views.viewport.getComponent('nouns');
        this.views.nouns_toolbar = this.views.nouns_packet.getComponent('nouns_toolbar');
        this.views.nouns_list = this.views.nouns_packet.getComponent('nouns_list');
        this.views.noun_detail = this.views.nouns_packet.getComponent('noun_detail');
        this.views.nouns_packet.tab.handler = function() {
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
