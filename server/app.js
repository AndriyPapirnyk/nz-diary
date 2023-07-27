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

app.post('/login', async(req, res) => {

    const inputData = req.body.inputValues;

    const data = {
        email: inputData.logIn__inputEmail,
        password: inputData.logIn__inputPassword,
    }

    console.log(data)

    try{

        const verify = await Student.findOne({email: data.email, password: data.password});
        console.log(verify)

        if(verify) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);         
        }        
    }
    catch(error) {
        console.log(error)
    }

});

app.post('/signup', async(req, res) => {

    const inputData = req.body.inputValues;

    const data = {
        email: inputData.signUp__inputEmail,
        password: inputData.signUp__inputPassword,
    }

    console.log(data)

    try{
        const verify = await Student.findOne({email: data.email});
        if(verify) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);         
        }        
    }
    catch(error) {
        console.log(error)
    }

    
});

app.post('/signup-data', async(req, res) => {

    const inputData = req.body.inputValues;

    const data = {
        name: inputData.signUp__inputName,
        surname: inputData.signUp__inputSurname,
        age: inputData.signUp__inputAge,
        class: inputData.signUp__inputClass,
        email: inputData.signUp__inputEmail,
        password: inputData.signUp__inputPassword,
        status: inputData.signUp__select,
    }

    console.log(data)

    try{
        const newUser = Student(data);
        newUser
        .save()
        .then((res) => {
            console.log(res);
        });
        res.sendStatus(200)
    }
    catch(error) {
        console.log(error);
        res.sendStatus(404)
    }

    
});


app.listen(PORT, () => {
    console.log(`Server works on port: ${PORT}`)
})


