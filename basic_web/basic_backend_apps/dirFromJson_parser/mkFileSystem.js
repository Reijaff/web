#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
let fileToParse = '',
    pwdValue = '';

program
    .version('0.1.0')
    .arguments('<file> [pwd]')
    .action(function(file, pwd) {
        fileToParse = file;
        pwdValue = pwd;
    })
    .option('-n, --name <dir>', 'name of the directory', 'core');

program.parse(process.argv);

if (fileToParse == '') {
    program.outputHelp();
	process.exit();
}
if (pwdValue == undefined) {
    pwdValue = process.env.PWD;
}

let content = JSON.parse(fs.readFileSync(fileToParse));

let newDir = pwdValue + '/' + program.name;

if (fs.existsSync(newDir)) {
    console.log(`directory "${newDir}" exists , remove or pick another name`);
	process.exit();
}

fs.mkdirSync(newDir);

function parseDir(object) {
    if (object.type == 'file') {
        fs.appendFileSync(newDir + object.path);
    } else {
        fs.mkdirSync(newDir + object.path);
        for (let count2 = 0; count2 < object.children.length; count2++) {
            parseDir(object.children[count2]);
        }
    }
}

for (let count = 0; count < content.children.length; count++) {
    parseDir(content.children[count]);
}
