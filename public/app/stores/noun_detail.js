App.noun_detail = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'ajax',
        url : '/touch/nouns/bankers.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: true
});
