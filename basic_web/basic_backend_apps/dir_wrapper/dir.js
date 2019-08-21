#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
var pwdValue,
    withFileTypes = false,
    new_arr = [];

program
    .version('0.1.0')
    .arguments('[pwd]')
    .action(function(pwd) {
        pwdValue = pwd;
    });

program.parse(process.argv);

if (pwdValue === undefined) {
    pwdValue = process.env.PWD;
}

function stripDir(object, layout2) {
    if (!fs.statSync(pwdValue + '/' + object).isDirectory()) {

        layout2.children.push({name: object, type: 'file'});

    } else {
        var storage2 = pwdValue + '/' + object,
            files2 = fs.readdirSync(storage2);

        layout2.children.push({
            name: object,
            type: 'directory',
            children: [],
        });

        for (let file2 of files2) {
            pwdValue = storage2;
            stripDir(file2, layout2.children[layout2.children.length - 1]);
        }
    }
}

let files = fs.readdirSync(pwdValue),
    storage = pwdValue,
    layout = {name: 'core', path: pwdValue, children: []};

for (let count = 0; count < files.length; count++) {
    pwdValue = storage;

    stripDir(files[count], layout);
}

fs.writeFileSync('newtest.json', JSON.stringify(layout));
