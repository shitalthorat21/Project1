const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
// const slug=require('slugs');
let Schema=mongoose.Schema;

let contactSchema=new Schema({
    
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Contact',contactSchema);