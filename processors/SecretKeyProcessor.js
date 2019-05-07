const { BadRequest } = require('pavel-universal/api/ApiErrors');
const config = require('../config');

module.exports = async function main() {
    const { token } = this.data;
    if (token !== config.token) {
        this.error(new BadRequest('AUTH_ERROR', 'Bad secret key received'));
        return Promise.reject('<-( | )->');
    }

    return true;
};
