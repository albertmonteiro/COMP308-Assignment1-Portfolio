process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

// app.use('/about', function(req, res){
//     res.send('About Express');
// });

// app.use('/', function (req, res) {
//     res.send('Hello Express');
// });

// app.route('/').get(function(req, res){
//     res.send('This is a GET request');
// }).post(function(req, res){
//     res.send('This is a POST request');
// })

// var hasName = function (req, res, next) {
//     if (req.param('name')) {
//         next();
//     }
//     else {
//         res.send("What the heck is your name???");
//     }
// };

// var sayHello = function (req, res, next) {
//     res.send('Hello ' + req.param('name'));
// }

// app.get('/', hasName, sayHello);

// module.exports = app;

app.listen(3000);
console.log("Server running at port 3000");