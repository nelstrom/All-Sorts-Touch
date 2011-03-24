Ext.regController("home", {
    model: "Suggestion",
    
    index: function() {
        if (App.home_store.data.length === 0) {
            App.home_store.load();
        }
        App.views.viewport.setActiveItem(App.views.homecard);
    },
    
    popular: function() {
        if (App.popular_store.data.length === 0) {
            App.popular_store.load();
        }
        App.views.viewport.setActiveItem(App.views.popularcard);
    }
});
