const express = require('express');
const router = express.Router();
// const { User, login } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage', { title: 'Home Page' });
});

module.exports = router;
