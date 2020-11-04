const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/Los_lagos_DB', {

    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify : false
})
    .then(db => console.log('BD connected'))
    .catch(err => console.error(err));