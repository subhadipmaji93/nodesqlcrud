const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const app = express();

require('dotenv').config();
const port = process.env.APP_PORT;

// parse request data application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));
// parse json data
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/src/views/layouts',
    partialsDir: __dirname + '/src/views/partials'
}));
app.use(express.static(__dirname + '/public'));

// For cross orgin policy
var corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200
};

// import employee routes
const employeeRoutes = require('./src/routes/employeeRoute');
app.use('/', employeeRoutes);


// import employee API routes
const employeeApiRoutes = require('./src/routes/employeeRoute.api');

// create employee routes
app.use('/api/employee', cors(corsOptions), employeeApiRoutes);


app.listen(port, ()=>{
    console.log(`server running on ${port}`);
}); 
