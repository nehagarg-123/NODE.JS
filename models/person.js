const mongoose=require('mongoose')

const personschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:false
    }
})
const person=mongoose.model('person',personschema);
module.exports=person;