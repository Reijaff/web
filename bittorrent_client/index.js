'use strict';

const fs = require('fs'),
    bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));

console.log(torrent.announce.toString('utf8'));
