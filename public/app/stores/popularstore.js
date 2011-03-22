App.popular_store = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'scripttag',
        url : App.domain + '/touch/popular.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: true
});
