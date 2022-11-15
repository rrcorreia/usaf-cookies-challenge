import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
const port = 7777;
app.use(cookieParser())

app.get('/login/:name', (req, res) => {
    let { name } = req.params
    res.cookie('name', name);
    res.end();
})

app.get('/hello', (req, res) => {
    if (req.cookies.name) res.end('Welcome' + req.cookies.name)
    else {
        res.redirect('/login');
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
