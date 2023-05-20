const express = require('express')
const app = express()
const port = 3000
const con = require('./db')
const router = require('./src/Routes/index.route')
var bodyParser = require("body-parser");
app.use(bodyParser.json());

router(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})