const mongoose = require("mongoose")

const { Schema } = mongoose;

const blogSchema = new Schema({
   
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },


});


module.exports=mongoose.model("Blogs", blogSchema)