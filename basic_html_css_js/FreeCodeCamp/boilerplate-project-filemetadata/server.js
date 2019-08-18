'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
// require and use "multer"...

// SET STORAGE
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    },
});

var upload = multer({storage: storage});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res) {
    res.json({greetings: 'Hello, API'});
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
    const file = req.file;
    console.log(req);
    if (!file) {
        const error = new Error('upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
    });
});

app.listen(4000, function() {
    console.log('Node.js listening ...');
});
