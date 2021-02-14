var express = require('express');
const Joi = require('@hapi/joi');
var app = express();

app.use(express.json());

var courses = [
    { id: 101, name: 'Java', price: 1000 },
    { id: 102, name: '.Net', price: 2000 },
    { id: 103, name: 'Node', price: 1500 },
    { id: 104, name: 'JavaScript', price: 2500 },
    { id: 105, name: 'TypeScript', price: 1800 }
];

// Creating Restful APIs:
// Access API: http://localhost:3000
app.get('/', function (req, res) {
    res.send('Hello World');
})

// Creating GET Request:
// Access API: http://localhost:3000/api/courses
app.get('/api/courses', function (req, res) {
    res.send(courses);
})

app.get('/api/courses/:id', function (req, res) {
    // res.send(req.params.id);
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if (course)
        res.send(course);
    else
        res.status(404).send('The course with the given Id was not found.');
})


// Creating POST Request:
// Access API: http://localhost:3000/api/courses
app.post('/api/courses', function (req, res) {

    const courseSchema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().required()
    })
    const { error } = courseSchema.validate(req.body);
    if (error) {
        res.status(400).send(error);
        return;
    }
    var course = {
        id: courses[courses.length - 1].id + 1,
        name: req.body.name,
        price: req.body.price
    };
    courses.push(course);
    res.send(courses);
})

// Creating PUT Request:
// Access API: http://localhost:3000/api/courses
app.put('/api/courses/:id', function (req, res) {
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if (course) {
        const { error } = validateCourse(req.body);
        if (error) {
            res.status(400).send(error);
            return;
        }
        course.name = req.body.name;
        course.price = req.body.price;
        res.send(course);
        return;
    }
    res.status(404).send('The course with the given Id was not found.');
})

function validateCourse(course) {
    const courseSchema = Joi.object({
        name: Joi.string().min(3).required(),
        price: Joi.number().required()
    })
    return courseSchema.validate(course);
}

// Creating DELETE Request:
// Access API: http://localhost:3000/api/courses
app.delete('/api/courses/:id', function (req, res) {
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if (course) {
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
        return;
    }
    res.status(404).send('The course with the given Id was not found.');
})

app.listen(3000, function () {
    console.log('The Server is running at port 3000!!');
})

