const express = require('express');
const router = express.Router();

//Get /cohort
router.get('/', (req, res)=> {
    res.send('GET /cohort is working');

});

module.exports = router;