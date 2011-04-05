Ext.Router.draw(function(map) {

    map.connect('home',              {controller: 'home',        action: 'index'});
    map.connect('popular',           {controller: 'home',        action: 'popular'});

    map.connect('nouns',             {controller: 'nouns',       action: 'album'});
    map.connect('nouns/by/:letter',  {controller: 'nouns',       action: 'index'});
    map.connect('nouns/:slug',       {controller: 'nouns',       action: 'show'});
    map.connect('collectors',        {controller: 'collectors',  action: 'index'});
    map.connect('collectors/:slug',  {controller: 'collectors',  action: 'show'});

});
