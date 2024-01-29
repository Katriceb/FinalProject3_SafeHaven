// bring in all dependencies
require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// npm i cors
// node --watch server.cjs
// Cross-origin resource sharing (allows frontend and backend to talk to eachther while on different ports)

const cors = require('cors')

// define variables
const PORT = process.env.PORT || 3001;
// Connect to the database
require('./config/database.cjs');
// create my app
const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());

// make sure we are actually getting requests
app.use((req, res, next) => {
    console.log('-----')
    console.log(`${req.method} request heard at ${req.url}.`)
    console.log('-----')
    next()
})

// Configure both serve-favicon and static middlewares
// to serve from the production build folder
// in our case, the folder is called 'dist' because that is
// what vite names it when we run the build script
// == note == we may not use this, so I'm commenting it out for now
// and I'll uncomment when we use it
// ==
// app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));
// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken.cjs'));
// Put API routes here, before the "catch all" routes
app.get('/api/test', (req, res) => {
    res.send('You just hit a API route');
  });
app.use('/api/users', require('./routes/api/users.cjs'));
app.use('/api/resource', require('./routes/api/resource.cjs'));
// we have included the line
// const userRouter = require('./routes/api/users.cjs')
// app.use('/api/user', userRouter);
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn.cjs');
//app.use('/api/items', ensureLoggedIn, require('./routes/api/items.cjs'));
//app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders.cjs'));
// The following "catch all" route (note the /*) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

// app.get('/seed', (req, res)=>{
// Resource.create([
    
//     {
//         name:'Ohio Domestic Violence Network ',
//         location: '174 E Long St Columbus Ohio 43215',
//         services:'Emergency Shelter ,Legal and Fiancial Assistance',
//         seeDetails: true
//     },
//     {
//         name:'Bravo',
//         location: '750 E Long ST Columbus Ohio 43215',
//         services:'Emergency Shelter ,Legal and Fiancial Assistance,Counseling',
//         seeDetails: false
//     },
//     {
//         name:'The Center for Family Safety and Healing',
//         location: '655 E Livingston Ave Columbus Ohio 43205',
//         services:'',
//         seeDetails: true
//     }

//     , (err, data)=>{
//         res.redirect('/config');
//     }
// ])

app.listen(PORT, function () {
    console.log(`Express app running on port: ${PORT}`);
})