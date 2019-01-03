const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    const todoDb = db.db('Todos');

    todoDb.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    todoDb.collection('Todos').find({complited: false}).toArray().then((docs) => {
        console.log('---');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    todoDb.collection('Todos').find({
        _id: new ObjectID('5c2e6318692c614b039ac2be')
    }).toArray().then((docs) => {
        console.log('---');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    todoDb.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

});
