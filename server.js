import { webcrypto } from "crypto";
import {WebSocketServer} from "ws";
const wss= new WebSocketServer({port:8080});

wss.on('connection',client=>{
    console.log("connected");
    client.on('message',(message,isBinary)=>{
        [...wss.clients].filter(c=>c!==client).forEach(c=>c.send(isBinary?message.toString():message));

    })
})