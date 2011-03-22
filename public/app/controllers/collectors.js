Ext.regController("collectors", {
    model: "Collector",
    
    index: function() {
        App.views.viewport.setActiveItem(App.views.collectorslist);
    },
    
    show: function(options) {
        App.collector_detail.proxy.url = "/touch/collectors/" + options.slug + ".json";
        App.collector_detail.load();
        App.views.viewport.setActiveItem(App.views.collectorslist);
    }
});
