/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
const app = require('express')();
const cors = require('cors');
const headlines = require('./api/headlines');
const everything = require('./api/everything');

// fetch environment variables from .env file
require('dotenv').config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const KEY = process.env.KEY;

app.listen(PORT, HOST, () =>
    console.log(`server started at ${new Date()}`)
);

app.use(cors());

app.get('/top-headlines', (req, res) => {
    headlines(req, res, KEY);
})

app.get('/everything', (req, res) => {
    everything(req, res, KEY);
})

// chrome browser specific code
app.get('/favicon.ico', (req, res) => res.status(204));

app.use(function(req,res){
    res.status(404).send('requested page not found');
});