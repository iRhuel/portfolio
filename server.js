const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const profile = require('./profile');
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp('eec37f80f7e2588cdb97165c26633365-us18');
const md5 = require('md5');

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/profile', profile);
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Phil',
            lastName: 'Truong'
        }
    };

    res.render('index', data);
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    console.log(req.body);
    mailchimp
        .put(`/lists/213fdf4e39/members/${md5(req.body.email.toLowerCase())}`, {
            email_address: req.body.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: req.body.firstName,
                LNAME: req.body.lastName
            }
        })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    ;
    res.render('thanks', { contact: req.body });
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
