App.alphabeticised_nouns = new Ext.data.Store({
    model: 'Noun',
    proxy: {
        type: 'ajax',
        url : '/touch/nouns/by/a.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: true
});
