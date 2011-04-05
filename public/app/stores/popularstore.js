App.stores.popular = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'scripttag',
        url : App.domain + '/touch/popular.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: false
});
