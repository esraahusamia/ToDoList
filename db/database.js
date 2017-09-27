var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_database');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB');
});


var taskSchema = new mongoose.Schema({
  id: {type: Number, index: {unique: true} },
  task: String,
  date: String,
  time: String
  });

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;