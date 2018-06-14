var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM powers ORDER BY id;', function(errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.post('/', (req, res) => {
    console.log('In Power POST router ', req.body);
    let newPower = req.body;
    const queryText = `INSERT INTO powers ("name", "description")
VALUES($1, $2);`;
    pool.query(queryText, [newPower.name, newPower.description])
        .then((result) => {
            console.log(`successful adding of New Power!`, req.body);
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });

}); // end POST

router.put('/', (req, res) => {
    const powerId = req.params.id;
    console.log('in Powers.router PUT to update');
    const queryText = 'UPDATE powers WHERE id-$1';
    poll.query(queryText, [powerId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error in PUT`, error);
            res.sendStatus(500);
        });

});
module.exports = router;