const {Router} = require('express')
const router = Router()
const {getuser,addusers, loginuser, delusers, updateuser} = require('../controllers/user.controller')
const jwt = require('jsonwebtoken');

// Middleware de autenticación
const SECRET_KEY = process.env.SECRET_KEY ;
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    console.log('Token no proporcionado');
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log('Error de verificación de token:', err.message);
      return res.sendStatus(403);
    }
    req.user = user;
    console.log('Token verificado para el usuario:', user);
    next();
  });
}

// Ruta para el login
router.post('/login', async (req, res) => {
  try {
    const login = await loginuser(req, res);
    res.status(200).json(login)
  } catch(error) {
    res.status(400).json({ error: error.message})
  }
});

// Rutas Produccion
router.get('/users', authenticateToken, async (req, res) => {
  try {
    const users = await getuser(req, res);
    res.status(200).json(users);
  } catch(error) {
    res.status(400).json({ error: error.message})
  }
  });
  
router.post('/users', authenticateToken, async (req, res) => {
  try {
    const newUser = await addusers(req, res);
    res.status(200).json({message:"Usuario Agregado",dato: newUser.name});
  } catch(error){
    res.status(400).json({ error: error.message})
  }
  });

router.delete('/users/:name',authenticateToken, async (req,res) => {
    try {
      const deluser = await delusers(req, res);
      res.status(200).json({message:"Usuario Eliminado",dato: deluser.name})      
    } catch(error) {
      res.status(400).json({ error: error.message})
    }
  });

router.put('/users/:name',authenticateToken, async (req,res) => {
    try {
      const userupdate = await updateuser(req, res);
      res.status(200).json({message:"Usuario Actualizado",dato: userupdate.name})      
    } catch(error) {
      res.status(400).json({ error: error.message})
    }
  });

  module.exports = router