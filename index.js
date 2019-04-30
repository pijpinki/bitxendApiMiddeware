const express = require('express');
const log4js = require('log4js');
const config = require('./config');
const controllers = require('./controllers');

class App {
    static start() {
        return new App();
    }

    constructor() {
        this.port = config.port;
        this.app = express();
        this.logger = log4js.getLogger('App');
        this.logger.level = 'all';
        this.init()
            .then(() => this.run());
    }

    applyControllers() {
        for (const Controller of controllers) {
            this.logger.debug('Apply Contoller', Controller.method, Controller.endpoint);
            this.app[Controller.method](Controller.endpoint, (req, res) => (
                new Controller(req, res)
            ));
        }
    }

    async init() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
            res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
            next();
        });
        this.app.use((req, res, next) => {
            if (req.method !== 'OPTIONS') return next();
            return res.send(['GET', 'POST', 'PUT', 'DELETE'].toString());
        });
        this.applyControllers();
    }

    async run() {
        this.app.listen(this.port, err => (
            err
                ? this.logger.error(err)
                : this.logger.info(`Started on port ${this.port}`)
        ));
    }
}

App.start();
