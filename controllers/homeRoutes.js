const express = require('express');
const router = express.Router();
const { User, Website } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//     res.render('homepage', { title: 'Home Page' });
// });

router.get('/', async (req, res) => {
    try {
        const websiteData = await Website.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const websites = websiteData.map((website) => website.get({ plain: true }));

        res.render('homepage', {
            websites,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/website/:id', async (req, res) => {
    try {
        const websiteData = await Website.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const website = websiteData.get({ plain: true });

        res.render('userLoggedIn', {
            ...website,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/userLoggedIn', async (req, res) => {
    try {
        const websiteData = await Website.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const websites = websiteData.map((website) => website.get({ plain: true }));

        res.render('userLoggedIn', {
            websites,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/user', withAuth, async (req, res) => {
    try {
        const websiteData = await Website.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        const websites = websiteData.map((website) => website.get({ plain: true }));

        res.render('user', {
            websites,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/userLoggedIn');
        return;
    }
    res.render('login', { title: 'Login' });
});

router.get('/signUp', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/userLoggedIn');
        return;
    }
    res.render('signUp', { title: 'Sign Up' });
});

// route to login page
// router.get('/login', async (req, res) => {
//     res.render('login', { title: 'Login' });
// });

// router.get('/signUp', async (req, res) => {
//     res.render('signUp', { title: 'Sign Up' });
// });



module.exports = router;
