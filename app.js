const path = require('path');

const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs'); // setting ejs
app.set('views', path.join(__dirname, 'views')); // engine

app.use(express.static('public')); // access static files

app.use(authRoutes);

app.listen(3000, function() {
    console.log('Server Running on : http://localhost:3000');
});