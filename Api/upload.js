const express = require('express');;
const router = express.Router();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const Data = require('./../Models/dataFrame');

router.get('/test', (req, res) => {
    res.json({
        "msg": "User Works!!"
    });
});

router.post('/', (req, res) => {
    console.log(req.body)
    const payload = new Data({
        Time: req.body.Time,
        ImgUrl: req.body.ImgUrl,
        Quote: req.body.Quote,
        Content: req.body.Content,
        PublishedOn: req.body.PublishedOn,
        Aman: req.body.heading,

    })
    console.log(payload)
    payload.save()
        .then(() => console.log("saved"))
        .catch(() => console.log("failed"))
    res.json({payload}); 
})

router.get('/all', (req, res) => {
    Data.find()
        .then(data => {
            res.json(data.reverse());
        })
        .catch(() => console.log("failed"))
})

router.post('/find-by-id', (req, res) => {
    Data.findById(req.body.id)
        .then(data => res.json(data))
})




module.exports = router;