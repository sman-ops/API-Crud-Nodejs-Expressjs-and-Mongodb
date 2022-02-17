const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
        firstName : String,
        lastName: String ,
        email : String ,
        phone : String ,
        is_active : {type:Boolean,default:false},
        is_Verified : {type:Boolean,default:false },
   
},
 {timestamps:true}
);

module.exports =mongoose.model('User',UserSchema)
