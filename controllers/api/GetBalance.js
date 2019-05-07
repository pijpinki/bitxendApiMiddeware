const PavelHandler = require('pavel-universal/api/ApiHandler');
const { SecretKeyProcessor } = require('../../processors');

class GetBalance extends PavelHandler {
    static get method() {
        return this.METHODS.GET;
    }

    static get endpoint() {
        return '/api/balance';
    }

    static get processors() {
        return [SecretKeyProcessor];
    }


    async onRequest() {
        return this.send({
            total: 1000,
            available: 100,
        });
    }
}

module.exports = GetBalance;
