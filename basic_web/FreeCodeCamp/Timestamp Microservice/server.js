const express = require('express');

const time = new Date();
const app = express();

app.get('/api', (req, res) => {
    res.send({
        unix: time.getTime(),
        utc: time.toUTCString(),
    });
}).get('/api/:date_string', (req, res) => {
    if (isNaN(time.setTime(req.params.date_string))) {
        res.send({error: 'Invalid Date'});
    }
    res.send({
        unix: time.getTime(req.params.date_string),
        utc: time.toUTCString(req.params.date_string),
    });
});

app.listen(3000, 'localhost');
