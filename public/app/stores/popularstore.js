App.popular_store = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'ajax',
        url : '/touch/popular.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: true
});
