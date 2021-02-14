
var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.json());

var Department = require('./models/department');

// Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/trainingdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to the database successfully.') })
    .catch((err) => { console.log('Cannot connect to the database!! : ' + err) })

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/api/departments', function (req, res) {
    Department.find(function (err, depts) {
        if (err) throw err;
        res.send(depts);
    })
})

app.post('/api/departments', function (req, res) {
    Department.create(req.body, function (err) {
        if (err) throw err;
        res.send('New Department Added Successfully.');
    })
})

app.listen(3000, function () {
    console.log('The Server is running at port 3000!!');
})

