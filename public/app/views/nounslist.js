App.views.NounsList = Ext.extend(Ext.List, {
    id: "nounslist",
    title: "nouns",
    initComponent: function() {
        Ext.apply(this, {
            itemTpl: [
                '{plural}',
                '<tpl if="occurences &gt; 1">',
                '  <em class="occurences">({occurences})</em>',
                '</tpl>'
            ],
            store: App.alphabeticised_nouns
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
