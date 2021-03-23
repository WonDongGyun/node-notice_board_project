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

        if (boardId.length == 0) {
            boardId = 1
        } else {
            boardId = boardId[0]['boardId'] + 1;
        }

        const today = new Date();
        const utc = today.getTime() + (today.getTimezoneOffset() * 60 * 1000);
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

        const kr_today = new Date(utc + KR_TIME_DIFF + 32400000);
        const day = kr_today;

        await board.create({ boardId, title, name, passWord, contents, day });
        res.send({
            result: "success",
            modal_title: "저장 성공",
            modal_body: "글이 성공적으로 저장 되었습니다."
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
})

// readBoard에서 수정하기 혹은 삭제하기 
router.post('/chkPassWord', async (req, res) => {
    try {
        const { boardId, passWord, nowButton } = req.body;
        const findIdPw = await board.find({ boardId, passWord });

        if (findIdPw.length > 0) {
            if (nowButton == 'updateButton') {
                res.send({ result: "success" });
            } else {
                await board.deleteOne({ boardId, passWord });
                res.send({
                    result: "success",
                    modal_title: "삭제 성공",
                    modal_body: "글이 성공적으로 삭제 되었습니다."
                });
            }
        } else {
            res.send({ result: "fail" });
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
})


// updateBoard에서 수정하기 혹은 삭제하기 
router.post('/updateBoard', async (req, res) => {
    try {
        const { boardId, title, name, contents, passWord, nowButton } = req.body;
        const findIdPw = await board.find({ boardId });

        const today = new Date();
        const utc = today.getTime() + (today.getTimezoneOffset() * 60 * 1000);
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

        const kr_today = new Date(utc + KR_TIME_DIFF + 32400000);
        const day = kr_today;

        if (findIdPw.length > 0) {
            if (nowButton == 'updateButton') {
                await board.updateOne({ boardId }, { $set: { title: title, name: name, contents: contents, passWord: passWord, day: day } });

                res.send({
                    result: "success",
                    modal_title: "수정 성공",
                    modal_body: "글이 성공적으로 수정 되었습니다."
                });

            } else {

                await board.deleteOne({ boardId });
                res.send({
                    result: "success",
                    modal_title: "삭제 성공",
                    modal_body: "글이 성공적으로 삭제 되었습니다."
                });
            }
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
})



module.exports = router;