const express = require('express');
const app = express();
const port = 3000;

const connect = require('./schema/dbconnect');
connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const basicBoardRouter = require('./views/basicBoard/basicBoard');
app.use('/api', basicBoardRouter)

app.get('/', (req, res) => {
    res.render('./basicBoard/basicBoard');
})

app.get('/readBoard', (req, res) => {
    let boardId = req.query.boardId;
    res.render('./basicBoard/readBoard', { boardId });
})

app.get('/writeBoard', (req, res) => {
    res.render('./basicBoard/writeBoard');
})

app.get('/updateBoard', (req, res) => {
    res.render('./basicBoard/updateBoard');
})


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})