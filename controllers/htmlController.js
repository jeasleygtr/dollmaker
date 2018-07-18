import express from "express";

const router = express.Router();

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/cast', function(req, res) {
    res.render('cast');
});

router.get('/crew', function(req, res) {
    res.render('crew');
});

router.get('/merch', function(req, res) {
    res.render('merch');
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
