const mongoose = require('mongoose');

async function main() {
  await mongoose.connect("mongodb://0.0.0.0:27017/");

}
main().catch(err => console.log(err));

  const FormSchema= new mongoose.Schema({
    ID:{
        type: mongoose.Schema.Types.ObjectId,
    },
    name:{
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50
    },
    phoneno:{
        type:Number,
        required:true,
        unique:true,
        maxLength:10,
        minLength:10,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        
        minLength: 3,
       

    },
    hobbies:{
        type:String,
        
    }
  })



 const User=mongoose.model('User',FormSchema);



module.exports={
   User,
};
