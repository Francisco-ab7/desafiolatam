const Users = require("../models/user.model.js");
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY
const bcrypt = require('bcryptjs')
require('dotenv').config();

const loginuser = async (req,res) => {
  const { login, password } = req.body;
  const user = await Users.findOne({ 
    where: { login: login } });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "El password ingresado no es correcto" });
    }
    const token = jwt.sign({ login }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciales inválidas');
  }
}

const getuser = async (req, res) => {
  const users = await Users.findAll({
    attributes: ['name', 'login', 'email']
  });
  return users;
};

const addusers = async (req, res) => {
  const { name, login, password, email } = req.body;
  const newuser = await Users.create({ name, login, password,email });
  const resnewuser = {
    name:newuser.name,
    login:newuser.login,
    email:newuser.email
  }
  return resnewuser;
};

const delusers= async (req,res) => {
  const { name } = req.params;
  const user = await Users.findOne({ 
    where: { name: name} });
  if (!user) {
    return res.status(404).json({mensaje:"Usuario no encontrado"})
  }
  await user.destroy();
  return user;
//  return res.status(200).json({message:"Usuario Eliminado",dato: user.name})
}

const updateuser = async (req,res) => {
  const {name} = req.params;
  const { password, email } = req.body;
  const upduser = await Users.findOne({ 
    where: { name: name} });
    if(!name){
      res.status(404).json({message:"Usuario no encontrado"})
    }
    await Users.update({ password: upduser.password} || {email: upduser.email });
    return upduser;
  }

module.exports = {getuser,addusers, loginuser, delusers, updateuser}