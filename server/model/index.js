const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/skate', { useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false }).then(
  ()=> {console.log('Database is connected')},
  err=>{console.log('Can not connect to the database' + err)}
);  

module.exports = mongoose;