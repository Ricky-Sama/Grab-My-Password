const router = require('express').Router();
const userRoutes = require('./userRoutes');
const websiteRoutes = require('./websiteRoutes');

router.use('/user', userRoutes);
router.use('/website', websiteRoutes);

module.exports = router;