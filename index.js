let path = require('path');
let express = require('express');
let mainRouter = express.Router();
let app = express();

let todoRouter = require("./students.js");

app.get('/', function (req, res) {
res.send('Hello World');
});

app.get('/Home', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'Home.html'));
});

app.get('/students', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'students.html'));
});

app.listen(3000);
console.log("Express server running on port 3000");