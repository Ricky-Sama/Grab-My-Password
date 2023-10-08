const express = require('express');
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    // res.render('homepage', { title: 'Homepage' })
    res.json({ message: 'Hello World!'});
});

module.exports = router;
