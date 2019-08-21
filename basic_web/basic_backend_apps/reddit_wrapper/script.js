#!/usr/bin/env node

var rawjs = require('raw.js');
var reddit = new rawjs('myWrapper001');
var program = require('commander');

reddit.setupOAuth2('zE9b5C3dYs4MQQ', 'R5RaFWm7n_zwdCvh1PlMwxhTNhw');

program
    .option(
        '-r, --subreddit <sub>',
        'Specify a subreddit to parse',
        'programming',
    )
    .option(
        '-l, --limit <num>',
        'Specify the maximum number of results to return. Default 25, maximum 100',
        25,
    );
program.parse(process.argv);

reddit.hot({r: program.subreddit, limit: program.limit}, (err, res) => {
    var count = 0;
    console.log('subreddit : r/' + program.subreddit + "\n");
    for (let val of res.children) {
        console.log(
            '%d.%s\ncontent: %s\n',
            ++count,
            val.data.title,
            val.data.url,
        );
    }
});

console.log(reddit.__proto__);
