import express from "express";

const router = express.Router();

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/cast', function(req, res) {
    res.send('cast');
});

router.get('/comic', function(req, res) {
    res.send('comic');
});

router.get('/gallery', function(req, res) {
    res.send('gallery');
});

router.get('/synopsis', function(req, res) {
    res.send('synopsis');
});

router.get('./support', function(req, res) {
    res.send('support')
});

export default router;
