const express = require('express');
const board = require("../../schema/boardSchema");
const router = express.Router();

// 전체 게시글 목록 조회 페이지
router.get('/board', async (req, res, next) => {
    try {
        const { day } = req.query;
        const boards = await board.find().sort('-day');
        res.json({ boards: boards });
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 게시글 조회 페이지
router.get('/readBoard/:boardId', async (req, res) => {
    try {
        const { boardId } = req.params;
        const read = await board.findOne({ boardId: boardId });
        res.json({ readBoard: read });
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// 게시글 작성
router.post('/writeBoard', async (req, res) => {
    try {
        const { title, name, contents, passWord } = req.body;

        let boardId = await board.find({}).sort("-boardId").limit(1);
        boardId = boardId[0]['boardId'] + 1;
        const today = new Date();
        const day = today;

        await board.create({ boardId, title, name, passWord, contents, day });
        res.send({ result: "success" });
    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;