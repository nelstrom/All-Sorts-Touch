App.stores.collector_detail = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'scripttag',
        url : App.domain + '/touch/collectors/bunch.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: false
});

