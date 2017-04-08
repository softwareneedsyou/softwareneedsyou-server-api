/**
 * Created by Tristan on 08/04/2017.
 */
'use strict';

module.exports = {
    api : require('./api'),
    admin : require('./admin'),
    init : function() {
        let app = require('express')();
        app.use('/admin', this.admin);
        app.use('/', this.api);
        return app;
    }
};
