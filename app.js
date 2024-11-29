const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/api');
const session = require('express-session');
const flash = require('connect-flash');


app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
    secret: '1371d12ihd112e9', // Change to a more secure key
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.use('/api', api);
app.use('/user', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/user', require('./routes/profile'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});