const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/student-model');
const DBroutes = require('./routes/route');
require('dotenv').config();

const PORT = 8000;
const url = `mongodb+srv://andriy:andriy12345@nz.beqns0u.mongodb.net/?retryWrites=true&w=majority`;
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(DBroutes);
app.use(cors());

async function connect() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB');
    } catch (err) {
        console.log(err);
    }
}

connect();

app.get('/', cors(), (req, res) => {
    res.send('test')
})

app.post('/signup', async(req, res) => {

    const inputData = req.body.inputValues;

    // const data = {
    //     name: signUp__inputName,
    //     surname: signUp__inputSurname,
    //     email: signUp__inputEmail,
    //     age: signUp__inputAge,
    //     class: signUp__inputClass,
    //     password: signUp__inputPassword
    // }

    res.sendStatus(200);
    console.log(data);    
    // console.log(inputData.inputValues);
    
    // const inputData = req.body;
    // console.log('Data received from client:', inputData);
    // res.json({ message: 'Data received and processed successfully!' });
    // console.log('test')
});


// app.get('/signup', (req,res) => {
//     res.sendFile(__dirname + '/signUP.html')
// })

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/startPage.html')
// })

// app.get('/login', (req,res) => {
//     res.sendFile(__dirname + '/index.html')
// })

// app.get('/teacher', (req,res) => {
//     res.sendFile(__dirname + '/teacher.html')
// })

// app.get('/start', (req,res) => {
//     res.sendFile(__dirname + '/startPage.html')
// })

// app.get('/main', (req,res) => {
//     res.sendFile(__dirname + '/main.html')
// }

app.listen(PORT, () => {
    console.log(`Server works on port: ${PORT}`)
})


