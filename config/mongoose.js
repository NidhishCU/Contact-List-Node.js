const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/contancts_list_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log('Successfully connected to db');
});

// // importing mongoose
// const mongoose = require('mongoose');

// // catching errors
// main().catch(err => console.log(err));

// // firing up the database
// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1/contancts_list_db');
//     console.log('DataBase Connected successfully');
// }