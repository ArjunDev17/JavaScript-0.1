require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/welcome', welcomeMsg);
function welcomeMsg(req, res) {
    res.send('your welcome')
}
app.get('/login', (req, res) => {
    res.send('Please login here')
})
app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})