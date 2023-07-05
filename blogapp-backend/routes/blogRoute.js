const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const blogData=require('../model/blogData');

//GET
router.get('/getbdata',async (req,res)=>{
    try{
        const data=await blogData.find();
        res.send(data);
    }
    catch(error){
        res.status(404).send('Data not found');
        console.log(error);
    }
})

//POST
router.post('/postbdata',async (req,res)=>{
    try{
        const item=req.body;
        const newData= new blogData(item);
        const savedData= await newData.save();
        res.status(200).send('Post successful');
    }
    catch(error){
        res.status(400).send('Post not successful');
        console.log(error);
    }
})

//UPDATE
router.put('/putbdata/:id',async (req,res)=>{
    try {
        const id=req.body._id;
        const updateData={$set:req.body};
        const updatedPut =await blogData.findByIdAndUpdate(id,updateData);
        res.send(updatedPut);
        res.status(200).send('Updation successful');
    } catch (error) {
        res.status(400).send('Updation not successful');
        console.log(error);
    }
})
//DELETE
router.delete('/deletebdata/:id',async (req,res)=>{
    try {
        const ind=req.params.id;
        const delData= await blogData.findByIdAndDelete(ind);
        res.send(delData);
        res.status(200);
    } catch (error) {
        res.status(400).send('Deletion not successful');
        console.log(error);
    }
})
module.exports=router;