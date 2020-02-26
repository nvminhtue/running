let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let userRouter = require('./routers/userRouter');

let app = express();

// app.get('/', (req, res) => {
//   res.send('hello world');
// })
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});

const db = mongoose.connection;

db ? console.log('DB connected successfully') : console.log('Something went wrong');

app.get('/', (req, res) => res.send('HELLO WORlD'))

app.use('/user', userRouter)

app.listen(8000, () => console.log(`Expressjs is running on 8000`))