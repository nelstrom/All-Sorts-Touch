App.stores.noun_detail = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'scripttag',
        url : App.domain + '/touch/nouns/bankers.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: false
});
