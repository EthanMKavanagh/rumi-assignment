const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('in server');
    if (req.body.name === '' || req.body.phone === '' || req.body.email === '' || req.body.birthday === '' || req.body.subject === '' || req.body.message === '') {
        res.sendStatus(400);
    } else {
        res.send(req.body).status(200);
    }
});

module.exports = router;