const express = require('express');
const router = express.Router();

router.get('/casos', (req, res) =>{
    res.send('cases from database');

} );

module.exports = router;