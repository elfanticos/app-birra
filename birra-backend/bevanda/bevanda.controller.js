'use strict'
const service = require('./bevanda.service');
const Controller = {};

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 */
Controller.birraList = async (req, res) => {
    try {
        let { page, length, search } = req.query;

        if (!page || isNaN(page)) throw { stack: "page is invalid", status: 400 };
        if (!parseInt(page)) throw { stack: "page deve essere maggiore di zero", status: 400 };

        if (!length || isNaN(length)) throw { stack: "length is invalid", status: 400 };
        if (!parseInt(length)) throw { stack: "length deve essere maggiore di zero", status: 400 };

        search = search || '';

        const list = await service.birraListService(page, length, search);

        res.status(200).send(list);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({
            msg: error.msg || "C'è stato un errore",
            error: JSON.stringify(error)
        });
    }
}

module.exports = Controller;