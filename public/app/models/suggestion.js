Ext.regModel('Suggestion', {
    fields: [
        {name: 'article', type: 'string'},
        {name: 'noun', type: 'string'},
        {name: 'noun_slug', type: 'string'},
        {name: 'collector', type: 'string'},
        {name: 'collector_slug', type: 'string'},
        {name: 'seed_tweet_id', type: 'string'},
        {name: 'seed_user_name', type: 'string'},
        {name: 'vote_count', type: 'number'}
    ]
});
