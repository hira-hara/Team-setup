import { createServer } from 'http';
import staticHandler from 'serve-handler';
import ws, { WebSocketServer } from 'ws';

//serve static folder
const server = createServer((req, res) => {   // (1) Creates HTTP server
    return staticHandler(req, res, { public: 'public' })
});
const wss = new WebSocketServer({ server }) // (2) Creates new WebSocket server and attaches it to HTTP server
wss.on('connection', (client) => {
    console.log('Client connected !')
    client.on('message', (msg) => {    // (3) Listens for new messages and broadcasts message to all users
        console.log(`Message:${msg}`);
        broadcast(msg)
    })
})

function broadcast(msg) {    // (4) 
    for (const client of wss.clients) {
        if (client.readyState === ws.OPEN) {
            client.send(msg)
        }
    }
}
server.listen(process.argv[2] || 8080, () => {
    console.log(`server listening...`);
})

