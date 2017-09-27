var express = require('express')
var Task = require('./db/database.js')
var path= require('path')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
res.sendFile('index.html', { root: path.join(__dirname, './') });
})

app.post("/", (req, res) => {
  var myData = new taskSchema({
  	task: req.body.task,
  	date: req.body.date,
  	time: req.body.time
  });
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

var port = process.env.PORT || 3000;
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

