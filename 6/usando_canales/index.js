const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const app = express();
const morgan = require('morgan')
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor de mensajería escuchando en el puerto ${PORT}`);
});
app.use(morgan('tiny'));

// Almacén para las colas y tópicos
const messageQueues = new Map();
const messageTopics = new Map();
const subscriptions = new Map();

// Adaptador de Canal Base
class ChannelAdapter {
    constructor(channelType) {
    this.channelType = channelType;
    }
    sendMessage(message) {
    console.log(`Enviando mensaje a través de ${this.channelType}`);
    }
    receiveMessage() {
    console.log(`Recibiendo mensaje de ${this.channelType}`);
    }
    }
    

// Adaptador de Canal HTTP
class HttpChannelAdapter extends ChannelAdapter {
    constructor() {
    super('HTTP');
    }
    sendMessage(message) {
    super.sendMessage(message);
    console.log('Mensaje enviado a través de HTTP');
    }
    receiveMessage(req) {
    super.receiveMessage();
    return req.body;
    }
}

// Canal Datatype para mensajes JSON
class JsonDataTypeChannel {
    constructor(schema) {
    this.schema = schema;
    }
    validate(message) {
    const { error } = this.schema.validate(message);
    if (error) {
    throw new Error(`Mensaje inválido:${error.details[0].message}`);
    }
    return message;
    }
    }

// Esquema para un mensaje JSON
const exampleJsonSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    priority: Joi.number().integer().min(1).max(5)
    });
const jsonChannel = new JsonDataTypeChannel(exampleJsonSchema);
const httpAdapter = new HttpChannelAdapter();

// Endpoint para publicar en un canal Point-to-Point
app.post('/publish/p2p/:queue', (req, res) => {
    const { queue } = req.params;
    const message = {
    id: uuidv4(),
    content: req.body,
    timestamp: new Date()
    };
    if (!messageQueues.has(queue)) {
    messageQueues.set(queue, []);
    }
    messageQueues.get(queue).push(message);
    res.status(201).json({ message: 'Mensaje publicado en cola P2P' });
    });

// Endpoint para consumir de un canal Point-to-Point
app.get('/consume/p2p/:queue', (req, res) => {
    const { queue } = req.params;
    if (!messageQueues.has(queue) || messageQueues.get(queue).length === 0)
    {
    return res.status(204).send();
}
const message = messageQueues.get(queue).shift();
res.json(message);
});

// Endpoint para publicar en un canal Publish-Subscribe
app.post('/publish/pubsub/:topic', (req, res) => {
    const { topic } = req.params;
    const message = {
    id: uuidv4(),
    content: req.body,
    timestamp: new Date()
    };
    if (!messageTopics.has(topic)) {
    messageTopics.set(topic, []);
    }
    messageTopics.get(topic).push(message);
    // Notificar a todos los suscriptores
    if (subscriptions.has(topic)) {
    subscriptions.get(topic).forEach(subscriber => {
    subscriber.res.write(`data: ${JSON.stringify(message)}\n\n`);
    });
    }
    res.status(201).json({ message: 'Mensaje publicado en tópico Pub/Sub'
    });
    });

    // Endpoint para suscribirse y consumir de un canal Publish-Subscribe
app.get('/subscribe/:topic', (req, res) => {
    const { topic } = req.params;
    const clientId = uuidv4();
    if (!messageTopics.has(topic)) {
    messageTopics.set(topic, []);
    }
    if (!subscriptions.has(topic)) {
    subscriptions.set(topic, new Map());
    }
    // Configurar la respuesta para streaming
    res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
    });
    // Registrar la suscripción
    subscriptions.get(topic).set(clientId, {
    res,
    lastMessageId: null
    });
    // Enviar mensajes no enviados previamente
    const topicMessages = messageTopics.get(topic);
    topicMessages.forEach(message => {
    if (!subscriptions.get(topic).get(clientId).lastMessageId ||
    message.id >
    subscriptions.get(topic).get(clientId).lastMessageId) {
    res.write(`data: ${JSON.stringify(message)}\n\n`);
    subscriptions.get(topic).get(clientId).lastMessageId =
    message.id;
    }
    });
    // Manejar la desconexión del cliente
    req.on('close', () => {
    if (subscriptions.has(topic)) {
    subscriptions.get(topic).delete(clientId);
    if (subscriptions.get(topic).size === 0) {
        subscriptions.delete(topic);
        }
    }
    });
});

// Endpoint para publicar en un canal JSON a través de HTTP
app.post('/publish/json/:topic', (req, res) => {
    const { topic } = req.params;
    const rawMessage = httpAdapter.receiveMessage(req);
    try {
    const validatedMessage = jsonChannel.validate(rawMessage);
    const message = {
    id: uuidv4(),
    ...validatedMessage,
    timestamp: new Date()
    };
    if (!messageTopics.has(topic)) {
    messageTopics.set(topic, []);
    }
    messageTopics.get(topic).push(message);
    // Notificar a todos los suscriptores
    if (subscriptions.has(topic)) {
    subscriptions.get(topic).forEach(subscriber => {
    httpAdapter.sendMessage(message);
    subscriber.res.write(`data:
    ${JSON.stringify(message)}\n\n`);
    });
    }
    res.status(201).json({ message: 'Mensaje JSON válido publicado' });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
});

// Endpoint para suscribirse a un canal JSON
app.get('/subscribe/json/:topic', (req, res) => {
    const { topic } = req.params;
    const clientId = uuidv4();
    if (!messageTopics.has(topic)) {
    messageTopics.set(topic, []);
    }
    if (!subscriptions.has(topic)) {
    subscriptions.set(topic, new Map());
    }
    // Configurar la respuesta para streaming
    res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
    });
    // Registrar la suscripción
    subscriptions.get(topic).set(clientId, {
    res,
    lastMessageId: null
    });
    // Enviar mensajes no enviados previamente
    const topicMessages = messageTopics.get(topic);
    topicMessages.forEach(message => {
    if (!subscriptions.get(topic).get(clientId).lastMessageId ||
    message.id >
    subscriptions.get(topic).get(clientId).lastMessageId) {
    httpAdapter.sendMessage(message);
    res.write(`data: ${JSON.stringify(message)}\n\n`);
    subscriptions.get(topic).get(clientId).lastMessageId =
    message.id;
    }
    });
    // Manejar la desconexión del cliente
    req.on('close', () => {
    if (subscriptions.has(topic)) {
    subscriptions.get(topic).delete(clientId);
    if (subscriptions.get(topic).size === 0) {
        subscriptions.delete(topic);
        }
    }
    });
});
// Canal de mensajes inválidos
const invalidMessageQueue = [];
// Middleware para capturar mensajes inválidos
app.use((err, req, res, next) => {
if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
invalidMessageQueue.push({
body: err.body,
path: req.path,
timestamp: new Date()
});
console.error('Mensaje inválido capturado:', err.body);
res.status(400).json({ error: 'Mensaje inválido' });
} else {
next();
}
});
// Endpoint para ver mensajes inválidos (para depuración)
app.get('/invalid-messages', (req, res) => {
res.json(invalidMessageQueue);
});
