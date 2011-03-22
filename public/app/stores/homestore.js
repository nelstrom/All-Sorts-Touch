App.home_store = new Ext.data.Store({
    model: 'Suggestion',
    proxy: {
        type: 'ajax',
        url : '/touch/home.json',
        reader: {
            type: 'json',
            root: ''
        }
    },
    autoLoad: true
});
