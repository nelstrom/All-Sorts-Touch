App.home_store = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'scripttag',
        url : App.domain + '/touch/home.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: false
});
