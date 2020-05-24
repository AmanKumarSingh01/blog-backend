const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema

const DataframeSchema = new Schema({
    Aman: {
        Type: String,
    },
    Heading: {
        Type: String,
    },
    Time: {
        type: String
    },
    ImgUrl: {
        type: String
    },
    Quote :{
        type: String
    },
    Content: {
        type: String
    },
    PublishedOn: {
        type: String
    }
})


module.exports = Data = mongoose.model('uploads', DataframeSchema);