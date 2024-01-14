const express = require('express');
const router = express.Router();

const user = require('./user');
const news = require('./news');
const comment = require('./comment');

router.use('/user', user);
router.use('/news', news);
router.use('/comment', comment);

module.exports = router;
