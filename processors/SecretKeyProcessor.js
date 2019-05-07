const { BadRequest } = require('pavel-universal/api/ApiErrors');
const config = require('../config');

module.exports = async function main(req) {
    const { token } = { ...req.query, ...req.body };
    if (token !== config.token)
        throw new BadRequest('AUTH_ERROR', 'Bad secret key received');

    return true;
};
