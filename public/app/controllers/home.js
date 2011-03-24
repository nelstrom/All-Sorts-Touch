Ext.regController("home", {
    model: "Suggestion",
    
    index: function() {
        App.home_store.load();
        App.views.viewport.setActiveItem(App.views.homecard);
    },
    
    popular: function() {
        App.popular_store.load();
        App.views.viewport.setActiveItem(App.views.popularcard);
    }
});
