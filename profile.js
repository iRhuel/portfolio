const express = require('express');
const router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/about', function (req, res) {
    res.send('About me');
});

module.exports = router;