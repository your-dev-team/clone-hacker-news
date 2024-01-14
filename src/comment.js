    const express = require('express');
const router = express.Router();

const Comment = require('./classes/Comment');
const db = require('./database');

router.post('/', async (req, res) => {
    const commentData = req.body;
    const comment = new Comment(commentData);
    await db.createComment(comment);
    res.status(201).send(comment);
});

router.get('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
    const comment = await db.getComment(commentId);
    res.send(comment);
});

router.put('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
    const updatedData = req.body;
    await db.updateComment(commentId, updatedData);
    res.send(`Comment with ID: ${commentId} updated successfully.`);
});

router.delete('/:commentId', async (req, res) => {
    const commentId = req.params.commentId;
    await db.deleteComment(commentId);
    res.send(`Comment with ID: ${commentId} deleted successfully.`);
});

module.exports = router;

    