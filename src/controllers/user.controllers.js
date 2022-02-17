const User = require('../models/user.model');


// create and save  a new user

exports.create = (req,res) =>{

    // validate request
    if(!req.body){
        return res.status(400).send({
            message : " please complete all field "
        });
        
                  } 
    // create a new user 
    const user = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        phone: req.body.phone,
        is_active : req.body.is_active,
        is_Verified : req.body.is_Verified


      
    });
    // save user in database
    user.save().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({message:err.message ||" something went wrong  while creating new user"})
    });
}
exports.findAll = (req,res) =>{

    User.find().then(users=>{
        res.send(users);
    }).catch(err=>{
        res.status(500).send({message:"something  wrong while getting list of users"})
    })

};

exports.findById = (req,res) =>{
     
    User.findById(req.params.id).then(user=>{
        if(!user){
            return res.status(404).send({message:"user not found with this id " + req.params.id})
        }
        res.send(user);
    }).catch(err=>{
        res.status(500).send({message:"could not found user with this id"})
    })

};

exports.delete = (req,res) =>{
     
    User.findByIdAndRemove(req.params.id).then(user=>{
        if(!user){
            return res.status(404).send({message:"user not found with this id " + req.params.id})
        }
        res.send({message:"user deleted successuflly"});
    }).catch(err=>{
        res.status(500).send({message:"could not delete user with is" +req.params.id})
    })

};

exports.update = (req,res) =>{

    // validate request
    if(!req.body){
        return res.status(400).send({message:"please fill all required fields"})
    }

    User.findByIdAndUpdate(req.params.id,{
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        email : req.body.email,
        phone : req.body.phone,
        is_active : req.body.is_active,
        is_Verified : req.body.is_Verified,


    },{new:true}).then(user=>{
        if(!user){
         return res.status(404).send({message:"user not found"})
        }
        res.send(user);

    }).catch(err=>{
        res.status(500).send({message:"could not delete user with is" +req.params.id})
    });
    

};