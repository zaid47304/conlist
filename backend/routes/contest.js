const express = require('express');
const Contest = require('../schemas/Contest');
const router = express.Router();
// const fetchuser=require('../middleware/fetchuser');
// ROUTE get all the notes using GET "/api/notes/fetchallnotes" : Login Required
// router.get('/fetchallcontests',fetchuser,async (req,res)=>{
//     try {
//         const contests=await Contest.find({user:req.user.id});
//         res.json(contests);
//     } catch (error) {
//         res.status(500).send("Internal Server Error");
//     }
// })
// ROUTE 2: Add a new contest using : POST "/api/contest/addcontests" . Login required
// router.post('/addcontest',fetchuser,async (req,res)=>{
//     try {
//         // use destructuring to get title and description
//     const {title,start,duration,url}=req.body;
//     // if there are errors return bad request along with errors
//     const contest=new Contest({
//         title,start,duration,url,user:req.user.id
//     })
//     const savedContest=await contest.save();
//     res.json(savedContest);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal Server Error");
//     }
// })
// ROUTE 3 Delelte the note - delete- /api/contest/deletenode/id - Login Required
// router.delete('/deletecontest/:id',fetchuser,async (req,res)=>{
//     try {
//         // find the note to be update and update it
//         let contest= await Contest.findById(req.params.id);
//         // if this note does not exist
//         if(!contest){return res.status(404).send("Not Found")};
//         // Allow deletion only if user owns this note
//         if(contest.user.toString()!==req.user.id){
//             return res.status(401).send("Not Allowed");
//         }
//         contest=await Contest.findByIdAndDelete(req.params.id)
//         res.json({"Success": "contest  removed" , contest:contest});
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal Server Error");
//     }
// })
module.exports=router;