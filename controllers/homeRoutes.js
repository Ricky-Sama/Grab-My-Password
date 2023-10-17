const express = require('express');
const router = express.Router();
const { User, login } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage', { title: 'Home Page' });
});

// route to login page
router.get('/login', async (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/signUp', async (req, res) => {
    res.render('signUp', { title: 'Sign Up' });
});



module.exports = router;
