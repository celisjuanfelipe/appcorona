const express = require('express');
const router = express.Router();

router.get('/signin', (req, res) => {
    res.send('Ingresando a la app');

});

module.exports = router;