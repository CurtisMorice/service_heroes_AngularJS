var express = require('express');
var app = express();

var power = require('./routes/power.router');

var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use('/power', power);

app.listen(port, function() {
    console.log('listening on port', port);
});