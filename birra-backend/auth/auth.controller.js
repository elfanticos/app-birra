'use strict'

const Controller = {};

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 */
Controller.login = async (req, res) => {
    try {
        let { user, password } = req.body;

        if (user !== 'root') throw { stack: "user is invalid", status: 400 };
        if (password !== 'password') throw { stack: "password is invalid", status: 400 };

        const token = global.jwt.encode({ user, password }, global.JWT_KEY);

        res.status(200).send({ token });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).send({
            msg: "Il utente o la password non sono validi",
            error: JSON.stringify(error)
        });
    }
}

module.exports = Controller;