const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});
router.get('/about', (req, res) => {
    res.render('about')
});
router.get('/works', (req, res) => {
    res.render('works')
});
router.get('/gallery', (req, res) => {
    res.render('gallery')
});

module.exports = router