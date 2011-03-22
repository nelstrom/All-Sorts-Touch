Ext.regController("home", {
    model: "Suggestion",
    
    index: function() {
        App.views.viewport.setActiveItem(App.views.homecard);
    },
    
    popular: function() {
        App.views.viewport.setActiveItem(App.views.popularcard);
    }
});