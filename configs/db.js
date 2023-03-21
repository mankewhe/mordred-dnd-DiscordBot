const mongoose = require('mongoose');

mongoose.connect(process.env.url, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})
.then(db => console.log('Conectado a Mongoose'))
.catch(err => console.error(err))