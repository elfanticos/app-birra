require('./constant');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * * @param {import('express').NextFunction} next
 */
global.ensureAuth = async (req, res, next) => {
    try {

        let authorization = (req.headers.authorization || '').split(' ');
        authorization = authorization[authorization.length - 1];

        const token = global.jwt.decode(authorization, global.JWT_KEY);

        if (!token) throw { msg: 'Azione non consentita' };

        next();
    } catch (error) {
        return res.status(500).send({ msg: error.msg || "Si è verificato un errore nell'autorizzazione" });
    }
};