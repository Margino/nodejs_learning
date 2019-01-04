const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB sever');
    }
    console.log('Connected MongoDB server');

    const todosDb = db.db('Todos');

    // DeleteMany
    // todosDb.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // DeleteOne
    // todosDb.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // FindOneAndDelete
    // todosDb.collection('Todos').findOneAndDelete({complited: false}).then((result) => {
    //     console.log(result);
    // });

    const userDb = db.db('User');

    userDb.collection('User').deleteMany({name: 'Alex'}).then((result) => {
        console.log(result);
    });

    userDb.collection('User').findOneAndDelete({
        _id: new ObjectID('5c2e3281f213040d6fbdbc0f')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });


});
