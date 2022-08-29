const Express = require('express');
const CORS = require('cors');
const Path = require('path');
require('dotenv').config();
require('./config/db.config').connectDB();

const App = Express();

App.use(CORS());
App.use(Express.json());
App.use(Express.urlencoded(
    {
        extended: true
    }
));
App.use(Express.static('public'));

App.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname + '/views/index.html'));
});

const CONN_PORT = process.env.PORT || 3358;
App.listen(CONN_PORT,
    () => console.log(`Your App is Listening at http://localhost:${CONN_PORT}`)
);