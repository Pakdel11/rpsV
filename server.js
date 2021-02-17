const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");


// const files = require('')
const game = __dirname + '/public/'
const app = express();
const server = http.createServer(app);


      

app.use(express.static(game))
const io = socketio(server);

io.on('connection', (user)=>{
    console.log("someone connected")
    user.emit('message', 'Hi, you are connected');
    user.on('message', (text)=>{
        io.emit('message', text);
    })
})

// app.get("/", (req, res)=>{
//     res.send("work");
// })
// app.use(express.static(game));

// app.listen(3000, console.log("server "));
// const PORT = 3000;
const PORT = process.env.PORT || 3000;
// server.on('error', console.log("server is not runing"));
server.listen(PORT, console.log(`the server is runing`));

