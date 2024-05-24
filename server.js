const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 3000;

let currentNumber = 0;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('updateNumber', currentNumber);

    socket.on('changeNumber', (data) => {
        const { tambah, kurang } = data;
        if (!isNaN(tambah)) {
            currentNumber += tambah;
        }
        if (!isNaN(kurang)) {
            currentNumber -= kurang;
        }
        io.emit('updateNumber', currentNumber);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.get('/:action', (req, res) => {
    const { action } = req.params;
    let value = parseInt(action.slice(6), 10);

    if (isNaN(value)) {
        value = 0;
    }

    if (action.startsWith('tambah')) {
        currentNumber += value;
    } else if (action.startsWith('kurang')) {
        currentNumber -= value;
    }

    io.emit('updateNumber', currentNumber);
    res.redirect('/');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
