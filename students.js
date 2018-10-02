let express = require('express');
let router = express.Router();
let todoList = []; //our todo list array
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'students.html'));
});

module.exports = router;