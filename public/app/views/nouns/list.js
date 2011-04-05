App.views.NounsList = Ext.extend(Ext.List, {
    id: "nouns_list",
    title: "nouns",
    initComponent: function() {
        Ext.apply(this, {
            itemTpl: [
                '{plural}',
                '<tpl if="occurences &gt; 1">',
                '  <em class="occurences">({occurences})</em>',
                '</tpl>'
            ],
            store: App.stores.alphabeticised_nouns
        });
        App.views.NounsList.superclass.initComponent.apply(this, arguments);
    },
    listeners: {
        itemtap: function(dataview, index) {
            var record = dataview.store.data.items[index],
                slug = record.data.slug;
            Ext.dispatch({
                controller : "nouns",
                action     : "show",
                historyUrl : "nouns/" + slug,
                slug       : slug
            });
        }
    }
});

Ext.reg('nouns_list', App.views.NounsList);
