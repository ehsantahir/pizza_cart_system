const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let cart = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('dashboard');
});

app.get("/pre-order", (req , res ) => {
    res.render('pre-order', {
        args: req.query
    });
});

app.get('/add-to-cart/:type', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    cart.push({
        ...req.params,
        ...req.query
    })
    res.send('ADDDED!');
});

app.get('/cart', (req, res) => {
    res.render('cart', {
        cartEntries: cart
    })
});

app.post('/register/:person', (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send('my name is ehsan and i live in sargodha!' +
        'saif is my friend');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});