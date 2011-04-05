Ext.regController("collectors", {
    model: "Collector",
    
    index: function() {
        App.views.viewport.setActiveItem(App.views.collectorslist);
    },
    
    show: function(options) {
        App.stores.collector_detail.proxy.url = App.domain + "/touch/collectors/" + options.slug + ".json";
        App.stores.collector_detail.load();
        App.views.viewport.setActiveItem(App.views.collectorslist);
    }
});
