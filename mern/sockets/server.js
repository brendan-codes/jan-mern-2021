const express = require('express');
const app = express();

const sockets = require("socket.io");

const server = app.listen(8008, () => {
    console.log("Sockets on port 8008")
});

const io = sockets(server, {cors: true});

io.on("connection", socket => {
    console.log("A client has connected", socket.id);


    socket.on("user-clicked-button", (data) => {
        console.log("Hello world!");
        console.log(data);
        socket.broadcast.emit("server-sends-number", {number: data.number});
    })

    // listen events
    // .on()


    // broadcast events
    // socket.emit()
    // io.emit()
    // socket.broadcast()
});