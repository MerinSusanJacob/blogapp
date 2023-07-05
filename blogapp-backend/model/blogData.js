const mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
        title:String,
        description:String,
        urlToImage:String,
        publishedAt:{
            type:Date,
            default:new Date()
        }
});

const blogModel=mongoose.model('blogdatabase',blogSchema);
module.exports=blogModel;