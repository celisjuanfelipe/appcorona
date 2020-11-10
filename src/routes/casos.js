const express = require('express');
const router = express.Router();

router.get('/casos/add', (req, res) => {
    res.render('casos/nc-region');
});

router.get('/casos', (req, res) =>{
    res.send('cases from database');

} );

module.exports = router;