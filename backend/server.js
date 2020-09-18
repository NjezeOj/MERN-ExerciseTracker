const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //should be added after the cors

const app = express();
//const bodyParser = require('body-parser');
const port = 4000;

//require('dotenv').config();




//app.use(bodyParser.json());
app.use(cors()); //Now, after the line app.use(express.json());, add:
//const uri = process.env.ATLAS_URI;


app.use(express.json());
mongoose.connect('put mongodb atlas connection string here', { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => { console.log("MongoDB database connection established succesfully"); });

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log('server is running on port:' + port);
});














