App.views.NounsAlbum = Ext.extend(Ext.List, {
    id: "nouns_album",
    title: "Choose a letter",
    initComponent: function() {
        Ext.apply(this, {
            itemTpl: [
                '{character}'
            ],
            store: App.stores.alphabet
        });
        App.views.NounsAlbum.superclass.initComponent.apply(this, arguments);
    },
    listeners: {
        itemtap: function(dataview, index) {
			var character = dataview.store.data.items[index].data.character;
            Ext.dispatch({
                controller : "nouns",
                action     : "index",
                historyUrl : "nouns/by/" + character,
				letter: character
            });
        }
    }
});

Ext.reg('nouns_album', App.views.NounsAlbum);
