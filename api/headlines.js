/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
const axios = require('axios');

// fetch environment variables from .env file
require('dotenv').config();
const baseUrlHeadlines = process.env.baseUrlHeadlines;
const pageSize = process.env.pageSize;

module.exports = function (req, res, KEY) {
    let page = req.query.page;

    const headlinesUrl = baseUrlHeadlines +
        `?country=gb&pageSize=${pageSize}&page=${page}`;

    axios.get(headlinesUrl, { headers: { 'Authorization': KEY } })
        .then(result => {
            res.json(result.data);
        }).catch(error => {
            res.status(403).send(error.response.data);
        })
}