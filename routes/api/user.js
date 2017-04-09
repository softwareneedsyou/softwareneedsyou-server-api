/**
 * Created by Tristan on 09/04/2017.
 */
'use strict';
let router = require('express').Router();
let models = require('../../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.User.findAll().then(function(list_users) {
        res.json({users: list_users});
    }).catch(next);
});

router.get('/details/:user_id', function(req, res, next) {
    models.User.findById(req.params.user_id).then(function(user) {
        //res.json(stud.responsify());
        res.json(user);
    }).catch(next);
});

router.get('/search/name/:user_name', function(req, res, next) {
    models.User.find({
        where: {
            pseudo: req.params.user_name
        }
    }).then(function(user) {
        //res.json(stud.responsify());
        res.json(user);
    }).catch(next);
});

module.exports = router;
