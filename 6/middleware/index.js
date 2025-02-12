const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('Middleware de nivel de aplicación ejecutado.');
    next();
    });

app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).send('Error del servidor.');
    });

const router = express.Router();

router.use((req, res, next) => {
    console.log('Middleware de nivel de direccionador ejecutado.');
    next();
    });

const messages = []; 
const consumers = []; 

app.post('/send', (req, res) => {
    const { message } = req.body;
    if (!message) {
    return res.status(400).json({ error: 'El mensaje es requerido' });
    }
    messages.push({ header: 'Mensaje', body: message });
    console.log('Mensaje recibido:', message);
    res.status(200).json({ status: 'Mensaje enviado exitosamente' });
    });

app.get('/receive', (req, res) => {
    if (messages.length > 0) {
    const message = messages.shift();
    return res.status(200).json({ message });
    } else {
    return res.status(204).send();
    }
    });

router.get('/route', (req, res) => {
    const { type } = req.query;
    if (type === 'text') {
    res.send('Mensaje de texto enviado.');
    } else if (type === 'json') {
    res.json({ message: 'Mensaje en formato JSON enviado.' });
    } else {
    res.status(400).send('Tipo de mensaje no soportado.');
    }
    });
    
app.use('/api', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
    });



