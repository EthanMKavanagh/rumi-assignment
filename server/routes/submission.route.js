const express = require('express');
const router = express.Router();
require('dotenv').config();

// Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post('/', (req, res) => {
    console.log('in server');
    if (req.body.name === '' || req.body.phone === '' || req.body.email === '' || req.body.birthday === '' || req.body.subject === '' || req.body.message === '') {
        res.sendStatus(400);
    } else {
        client.messages
            .create({
                body: 'You have successfully signed up for Rumi!',
                from: process.env.TWILIO_PHONE_NUMBER,
                to: req.body.phone
            })
            .then(message => console.log(message.sid));
            res.send(req.body).status(200);
    }
});

module.exports = router;