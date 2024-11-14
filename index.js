// application packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article')
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/articles'); 
const authorRoutes = require('./routes/authors');

app.use('/', articleRoutes);
app.use('/author', authorRoutes);


app.listen(3005, () => {
    console.log('App is started at http://localhost:3005')
})