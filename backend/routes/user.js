const { User } = require("../db");
const zod=require("zod");

const express=require("express")
const dataverification=zod.object({
    name:zod.string(),
    phoneNo:zod.number().min(10).max(10),
    email:zod.string().email(),
    hobbies:zod.string(),
});
const router=express.Router();
router.get('/getdata',(req,res)=>{
    const data= User.find({}).then(items=>{
        console.log(items);
        res.send(items);
    }).catch((err)=>{
        console.log(err);
    })

});


router.post('/signup',async function(req,res,next){
try{
    const result=dataverification.safeParseAsync(req.body);
    if(!result){
        return res.status(411).json({
            msg:"Incorrect input"
        })
    }
    const user = await User.create({
        name:req.body.username,
        phoneno:req.body.phoneno,
        email:req.body.email,
        hobbies:req.body.hobbies,
        
    })

    res.json({
        msg:"user create successfully",
        
    })



}
catch(err){
    console.log(err);
}

});

module.exports=router;