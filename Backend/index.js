const express = require('express');
const ConnectToMongo = require("./Db/db");
const cors = require("cors");
const http = require('http');
const app = express();
const dotenv = require('dotenv');
const path = require("path");
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000", // Replace with your React app's origin
        methods: ["GET", "POST"]
    }
});

dotenv.config({ path: './config.env' }); // Move this line here

ConnectToMongo();

const port = 5000;
app.use(express.json());
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const users = {};
io.on('connection', (socket) => {
    socket.on('join', (userName) => {
        users[socket.id] = userName;
        socket.broadcast.emit('message', {
            name: 'System',
            message: `${userName} joined the chat`,
        });
    });

    socket.on('leave', (userName) => {
        delete users[socket.id];
        socket.broadcast.emit('userLeft', userName);
    });

    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
});

app.use("/api/v1", require("./route/Client"));
app.use("/auth/user", require("./route/Auth"));

server.listen(port, () => {
    console.log(`Store app listening on port ${port}`);
});
