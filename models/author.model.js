
const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name required"]
    },
    age:{
        type:Number,
        required:[true, "Age required"],
        min:[0, "Age has to be a positive number"]
    },
    state:{
        type:String,
        required:[true, "State required"]
    }
}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author