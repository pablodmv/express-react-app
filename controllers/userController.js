// Task Model
const User = require('../models/user');

exports.home = function(req, res) {
 res.json({status: 'correcto'});
};

exports.getUser = async (req,res) =>{
  const resp = await User.find();
  res.json(resp);
};

exports.getUserById = async (req,res) =>{
  const resp = await User.findById(req.params.id);
  res.json(resp);
};

exports.insertUser = async (req,res) => {
    const { name, lastName } = req.body;
    const user = new User({name, lastName});
    await user.save();
    res.json({status: 'User Saved'});
};
exports.updateUser = async (req,res) => {
  const { name, lastName } = req.body;
  const newUser = {name, lastName};
  await User.findByIdAndUpdate(req.params.id, newUser);
  res.json({status: 'User Updated'});

};

exports.deleteUser = async (req,res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({status: 'User deleted'});

};
