const mongoose=require('mongoose');
const { Schema } = mongoose;

const ContestSchema = new Schema({
    user:{
        // just like a foreign key
        // kisi dusre model ki object id yahan rakhunga
       // yahan par user ko store kar skte hain
        type: mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
   title:{
       type:String,
       required:true
   },
   start:{
       type:String,
       required:true
   },
   duration:{
       type:String,
       default:"General"
   },
   url:{
       type:String
   },
   date:{
       type:Date,
       default : Date.now
   }
});
module.exports=mongoose.model('contests',ContestSchema);