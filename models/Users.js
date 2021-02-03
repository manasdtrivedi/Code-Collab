const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        rooms:[
            {
                type:ObjectId,
                ref:"Room"
            }
        ]
    }
)
mongoose.model("User", userSchema);