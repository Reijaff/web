#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
var pwdValue,
    withFileTypes = false;
program
    .version('0.1.0')
    .arguments('[pwd]')
    .action(function(pwd) {
        pwdValue = pwd;
    })
    .option('-a, --all', 'do not ignore entries starting with .', false)
    .option('-l, --long', 'use a long listing format', false);

program.parse(process.argv);

if (pwdValue === undefined) {
    pwdValue = process.env.PWD;
}

fs.readdir(pwdValue, ['utf8', withFileTypes], (err, files) => {
    if (err) console.log(err);
    if (program.long) {
        for (let file_long of files) {
            fs.stat(pwdValue + '/' + file_long, (err, stats) => {
                var per = (stats.mode & 0777) + '',
                    arr = [];
                for (var i = 0; i < per.length; i++) {
                    switch (per[i]) {
                        case '0':
                            arr.push('---');
                            continue;
                        case '1':
                            arr.push('--x');
                            continue;
                        case '2':
                            arr.push('-w-');
                            continue;
                        case '3':
                            arr.push('-wx');
                            continue;
                        case '4':
                            arr.push('r--');
                            continue;
                        case '5':
                            arr.push('r-x');
                            continue;
                        case '6':
                            arr.push('rw-');
                            continue;
                        case '7':
                            arr.push('rwx');
                            continue;
                        default:
                            arr.push('rwx');
                            continue;
                    }
                }

                if (file_long[0] != '.' || program.all) {
                    console.log(
                        '%s\t%s\t%s\t%s\t%s\t%s',
                        arr.join(''),
                        stats.uid,
                        stats.gid,
                        stats.size,
                        stats.atime
                            .toString()
                            .split(' ')
                            .slice(1, 5)
                            .join(' '),

                        file_long,
                    );
                }
            });
        }
    } else {
        console.log(
            files.filter(file => file[0] != '.' || program.all).join('  '),
        );
    }
});
