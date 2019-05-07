const PavelHandler = require('pavel-universal/api/ApiHandler');
const { SecretKeyProcessor } = require('../../processors');

class GetHistory extends PavelHandler {
    static get method() {
        return this.METHODS.GET;
    }

    static get endpoint() {
        return '/api/history';
    }

    static get processors() {
        return [SecretKeyProcessor];
    }


    async onRequest() {
        return this.send({
            result: [],
            page: Number(this.data.page),
        });
    }
}

module.exports = GetHistory;
