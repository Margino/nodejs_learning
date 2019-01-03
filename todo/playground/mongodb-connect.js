// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // const todoDb = db.db('Todos');

    // todoDb.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     complited: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // const userDb = db.db('User');
    //
    // userDb.collection('User').insertOne({
    //     name: 'Alex',
    //     age: 22,
    //     location: 'Philadelphia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    const userDb = db.db('User');

    userDb.collection('User').find({name: 'Alex'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch user');
    });

    db.close();
});
