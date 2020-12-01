/**
 * web app to retrieve news articles from newapi.org
 * author dheeraj.br2@gmail.com
 */
const axios = require('axios');

// fetch environment variables from .env files
require('dotenv').config();
const baseUrlEverything = process.env.baseUrlEverything;
const pageSize = process.env.pageSize;

module.exports = function (req, res, KEY) {
    let searchQuery = req.query.search;
    let page = req.query.page;

    const everythingUrl = baseUrlEverything +
        `?qInTitle=${searchQuery}&pageSize=${pageSize}&page=${page}`;

    axios.get(everythingUrl, { headers: { 'Authorization': KEY } })
        .then(result => {
            res.json(result.data);
        }).catch(error => {
            res.status(403).send(error.response.data);
        })
}