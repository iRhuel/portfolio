const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/about', function (req, res) {
    res.send('I\'m not very creative, like... at all.');
});

module.exports = router;
