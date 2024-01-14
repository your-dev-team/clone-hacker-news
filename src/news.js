    const express = require('express');
const router = express.Router();

const News = require('./classes/News');
const db = require('./database');

router.post('/', async (req, res) => {
    const newsData = req.body;
    const news = new News(newsData);
    await db.createNews(news);
    res.status(201).send(news);
});

router.get('/', async (req, res) => {
    const newsList = await db.getAllNews();
    res.send(newsList);
});

router.get('/:newsId', async (req, res) => {
    const newsId = req.params.newsId;
    const news = await db.getNews(newsId);
    res.send(news);
});

router.put('/:newsId', async (req, res) => {
    const newsId = req.params.newsId;
    const updatedData = req.body;
    await db.updateNews(newsId, updatedData);
    res.send(`News with ID: ${newsId} updated successfully.`);
});

router.delete('/:newsId', async (req, res) => {
    const newsId = req.params.newsId;
    await db.deleteNews(newsId);
    res.send(`News with ID: ${newsId} deleted successfully.`);
});

module.exports = router;

    