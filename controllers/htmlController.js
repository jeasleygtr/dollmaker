import express from "express";

const router = express.Router();

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/cast', function(req, res) {
    res.render('cast');
});

export default router;
