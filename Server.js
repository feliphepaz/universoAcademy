const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')))

app.post('/subscribe', (req, res) => {
    const { firstName, phone, email, js } = req.body;
    const chimpData = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    PHONE: phone
                }
            }
        ]
    }

    const chimpDataPost = JSON.stringify(chimpData);

    const options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/991b4de739',
        method: 'POST',
        headers: {
            Authorization: 'auth 8ab2a602aca0db3a23a855a917892e44-us20'
        },
        body: chimpDataPost
    }

    if (email) {
        request(options, (err, response, body) => {
            if (err) {
                res.json({error: err})
            } else {
                if (js) {
                    res.sendStatus(200);
                }
            }
        })
    } else {
        res.status(404).send({ message: 'Failed' });
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server started'));