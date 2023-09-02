const express = require('express');
const morgan = require('morgan');



//express app
const app = express();

//connect to mango db
const dbURI = 'mongodb+srv://<username>:<password>@nodeclass.wuw7ju5.mongodb.net/?retryWrites=true&w=majority'

// register
app.set('view engine', 'ejs');


//listing for request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bower', snippet: 'lorem ipsum dolor sit amet consectetur'},
    ];

  res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
   res.render('about', {title: 'about'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'create a new blog'});
});

//404 page
app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});
});