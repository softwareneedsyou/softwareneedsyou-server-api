/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';
let router = require('express').Router();
let models = require('../../models');

/* GET plugins listing. */
router.get('/', function(req, res, next) {
    models.Plugin.findAll().then(function(list) {
        models.PluginType.findAll().then(function(liste) {
            res.json({
                types: liste,
                plugins: list
            });
        }).catch(next);
    }).catch(next);
});

/*router.get('/details', function(req, res, next) {
 //id
 res.json({});
 });*/

module.exports = router;
