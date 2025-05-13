
let comments = [];
const commentController = {
    writeComment: (req, res) => {
        const { content } = req.body;
        const newComment = { content, date: new Date().toISOString() };
        comments.unshift(newComment); //최근 댓글 위로가게
        res.json(newComment)
    },

    getComment: (req, res) => {
        res.json(comments)
    }

}

module.exports = commentController;