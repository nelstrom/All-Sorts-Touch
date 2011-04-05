Ext.regController("home", {
    model: "Suggestion",
    
    index: function() {
        if (App.stores.home.data.length === 0) {
            App.stores.home.load();
        }
        App.views.viewport.setActiveItem(App.views.homecard);
    },
    
    popular: function() {
        if (App.stores.popular.data.length === 0) {
            App.stores.popular.load();
        }
        App.views.viewport.setActiveItem(App.views.popularcard);
    }
});
