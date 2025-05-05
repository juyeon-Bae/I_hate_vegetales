const express = require('express');
const router = express.Router();

let comments = [];

router.get('/', (req, res) => {
    res.json(comments)
})

router.post('/', (req, res) => {
    const { content } = req.body;
    const newComment = { content, date: new Date().toISOString() };
    comments.unshift(newComment); //최근 댓글 위로가게
    res.json(newComment)
})

module.exports = router;