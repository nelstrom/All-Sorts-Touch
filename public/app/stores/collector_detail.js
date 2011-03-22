App.collector_detail = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'ajax',
        url : '/touch/collectors/bunch.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: true
});

