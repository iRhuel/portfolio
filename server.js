const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const profile = require('./profile');

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/profile', profile);

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        person: {
            firstName: 'Phil',
            lastName: 'Truong'
        }
    };

    res.render('index', data)
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body })
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});
