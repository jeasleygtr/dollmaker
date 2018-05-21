import express from "express";

const router = express.Router();

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/cast', function(req, res) {
    res.render('cast');
});

router.get('/comic', function(req, res) {
    res.render('comic');
});

router.get('/gallery', function(req, res) {
    res.render('gallery');
});

router.get('/synopsis', function(req, res) {
    res.render('synopsis');
});

router.get('/support', function(req, res) {
    res.render('support');
});


export default router;
