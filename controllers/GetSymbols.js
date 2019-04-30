const BaseHandler = require('pavel-universal/api/ApiHandler');
const axios = require('axios');

class Symboy extends BaseHandler {
    static get method() {
        return super.METHODS.GET;
    }

    static get endpoint() {
        return '/api/public/symboy';
    }

    async onRequest() {
        const { data } = await axios.get('https://api.bitfinex.com/v2/conf/pub:list:pair:exchange');
        const toUsd = data[0].filter(s => s.substr(s.length - 3) === 'USD');
        this.send({ data: toUsd });
    }
}

module.exports = Symboy;
