var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM hero ORDER BY id;', function(errorMakingDatabaseQuery, result) {
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
    console.log('In Hero POST router ', req.body);
    let newHero = req.body;
    const queryText = `INSERT INTO hero ("name", "backstory")
VALUES($1, $2);`;
    pool.query(queryText, [newHero.name, newHero.backstory])
        .then((result) => {
            console.log(`successful adding of New Hero!`, req.body);
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });

}); // end POST

router.put('/', (req, res) => {
    const heroId = req.params.id;
    console.log('in hero.router PUT to update');
    const queryText = 'UPDATE hero WHERE id-$1';
    poll.query(queryText, [heroId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error in PUT`, error);
            res.sendStatus(500);
        });

});
module.exports = router;