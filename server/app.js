const express = require('express');
const mongoose = require('mongoose');

const Student = require('./models/student-model');
const DBroutes = require('./routes/route');
require('dotenv').config();
const ejs = require('ejs');
const PORT = 3000;
const url = `mongodb+srv://andriy:andriy12345@nz.beqns0u.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(DBroutes);

async function connect() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB');
    } catch (err) {
        console.log(err);
    }
}

connect();


app.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/signUP.html')
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/startPage.html')
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/teacher', (req,res) => {
    res.sendFile(__dirname + '/teacher.html')
})

app.get('/start', (req,res) => {
    res.sendFile(__dirname + '/startPage.html')
})

app.get('/main', (req,res) => {
    res.sendFile(__dirname + '/main.html')
})

app.listen(PORT, () => {
    console.log(`Server works on port: ${PORT}`)
})


