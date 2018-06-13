var express = require('express');
var app = express();

var powers = require('./routes/power.router');
var hero = require('./routes/hero.router');
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use('/power', powers);
app.use('/hero', hero);

app.listen(port, function() {
    console.log('listening on port', port);
});