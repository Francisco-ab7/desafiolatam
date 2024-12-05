const wss = new WebSocket({ port: 8080
});
wss.on('connection', (ws) => {
console.log('Cliente conectado ');
ws.on('message', (message) => {
 console.log('Mensaje recibido: ', message); 
 ws.send(`Mensaje recibido: ${message}`);
 });
});