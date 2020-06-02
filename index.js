const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const db = require('./constant/keys.js').mongouri;
const upload = require('./Api/upload.js');
const download = require('./Api/download.js');
var cors = require('cors');
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(cors());

app.options('*', cors());

app.use(bodyParser.json())

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log(err);
    }
);

app.use('/api/upload', upload);
app.use('/api/download', download);



app.listen(port, ()=>{console.log(`The server is running on port ${port}`)})
