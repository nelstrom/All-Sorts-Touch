App.alphabeticised_nouns = new Ext.data.Store({
    model: 'Noun',
    proxy: {
        type: 'scripttag',
        url : App.domain + '/touch/nouns/by/a.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: false
});
