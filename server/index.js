let express = require('express');
let bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

exports.mongoose = mongoose;

let userRouter = require('./routers/userRouter');
let recordRouter = require('./routers/recordRouter');

let app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/running', { useNewUrlParser: true});

mongoose.connection ? console.log('DB connected successfully') : console.log('Something went wrong');

app.get('/', (req, res) => res.send('HELLO WORlD'))

app.use('/user', userRouter)

app.use('/record', recordRouter)

app.listen(8000, () => console.log(`Expressjs is running on 8000`))
