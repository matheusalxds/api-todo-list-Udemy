const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongodb = 'mongodb://localhost/todo';
module.exports = mongoose.connect(mongodb, {useMongoClient: true});