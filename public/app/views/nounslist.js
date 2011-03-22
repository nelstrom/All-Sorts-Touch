App.views.NounsList = Ext.extend(Ext.List, {
    title: "nouns",
    initComponent: function() {
        Ext.apply(this, {
            itemTpl: '{plural}',
            store: App.alphabeticised_nouns,
        });
        App.views.NounsList.superclass.initComponent.apply(this, arguments);
    },
    onItemDisclosure: function(record, btn, index) {
        var slug = record.data.slug;
        Ext.dispatch({
            controller : "nouns",
            action     : "show",
            historyUrl : "nouns/" + slug,
            slug       : slug
        });
    }
});
