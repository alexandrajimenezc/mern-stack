const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
 
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const { username } = req.body;

        const newUser = new User({ username });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUsers = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = userCtrl;

/* const userCtrl ={};

const User = require('../models/User');

userCtrl.getUsers = async (req,res) => {
  
   const users =  await User.find();
   console.log(users);
    res.json(users) 
    
  
}
  
  userCtrl.createUser = async(req,res) => {
    const{username}= req.body;
    console.log(req.body);
      const newUser = new User({username});
      try {
        await newUser.save();
      
        res.json({message:'User created'}) 
      
    } catch (error) {
        res.status(500).send({
          error: 'Hubo un error',
          message: error.message
        });
      }
    
    }
    
    
    

    userCtrl.deleteUsers = async (req,res) => {
      const borrar= await User.findByIdAndDelete(req.params.id);
console.log(borrar)
      res.json({message:'NOTE DELETE'})
  }









module.exports = userCtrl;

 */








/* 
userCtrl.getUsers = async (req,res) => {
  const users =  await User.find();
    res.json(users)
}



userCtrl.createUser = async(req,res) => {
  const{username}= req.body;
  const newUser = new User({username});
  await newUser.save();
  res.json('New User created') 
}



userCtrl.deleteUsers = async (req,res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id)
  res.json('Delete User')
}
*/
            /*  // newUser.save((err, UserStored) => {
             //   if (err) {
             //     res.status(500).send({
             //       error: 'Hubo un error'
             //     });
             //   } else {
             //     res.json({ message: 'User created' });
             //   }
             // }); */