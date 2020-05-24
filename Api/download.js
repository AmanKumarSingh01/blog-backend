const express = require('express');;
const router = express.Router();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


router.get('/test', (req, res) => {
    res.json({
        "msg": "User Works!!"
    });
});




module.exports = router;