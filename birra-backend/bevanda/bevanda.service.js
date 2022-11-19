'use strict'
const request = require('request');
const Service = {};



Service.birraListService = async (page, length, search) => {
    return new Promise((resolve, reject) => {
        try {
            let endpoint = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${length}`;

            if (search) endpoint += `&beer_name=${search}`;

            request.get(endpoint, async (err, httpResponse, body) => {
                if (err) return reject(err);
                return resolve(JSON.parse(body));
            });
        } catch (error) {
            return reject(error);
        }
    });
}


module.exports = Service;