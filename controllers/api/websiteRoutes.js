const router = require('express').Router();
const { Website } = require('../../models');
const withAuth = require('../../utils/auth');

// POST route to add a new website and its credentials
router.post('/', withAuth, async (req, res) => {
    try {
        const websiteData = await Website.create({
            website_name: req.body.website_name,
            url: req.body.url,
            username: req.body.username,
            password: req.body.password,
            user_id: req.session.user_id //assuming user is loggin in and their ID is stored in the session
        });
        res.status(200).json(websiteData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET route to retrieve a user's websites
router.get('/', withAuth, async (req, res) => {
    try {
        const websiteData = await Website.findAll({
            where: { user_id: req.session.user_id }
        });
        res.status(200).json(websiteData);
    } catch (err) {
        res.status(500).json(err);
    }

    //Render the website data to the homepage
    res.render('userLoggedIn', {
        title: 'Passwords Grabbed!'
    })
});

// PUT route to update a website's detales using its ID
router.put('/', withAuth, async (req, res) => {
    try {
        const websiteData = await Website.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!websiteData) {
            res.status(404).json({ message: 'No website found with this ID!'});
            return;
        }
        res.status(200).json(websiteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE route to delete a website using its ID
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const websiteData = await Website.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!websiteData) {
            res.status(404).json({ message: 'No website found with this ID!' });
            return;
        }
        res.status(200).json(websiteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
