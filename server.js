require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 8080;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(express.static('public'));

app.post('/mail', (req, res) => {
    sgMail
        .send({to: 'pltruong2507@gmail.com', ...req.body})
        .then(() => {
            res.status(200).send('email sent');
        })
        .catch(err => {
            console.log(err);
            res.status(500);
            res.send(err.message);
        });
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
