let path = require('path');
let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.redirect(req.baseUrl + '/Home');
});

app.get('/Home', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'Home.html'));
});

app.get('/students', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'students.html'));
});

app.use('/cdn', express.static('public'));

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");