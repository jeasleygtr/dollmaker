'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/cast', function (req, res) {
    res.send('cast');
});

router.get('/comic', function (req, res) {
    res.send('comic');
});

router.get('/gallery', function (req, res) {
    res.send('gallery');
});

router.get('/synopsis', function (req, res) {
    res.send('synopsis');
});

router.get('/support', function (req, res) {
    res.send('support');
});

exports.default = router;