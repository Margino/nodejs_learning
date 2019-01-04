const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if (err) {
        return console.log('Unabel to connect MondoDB server');
    }
    console.log('Connected to MongoDB server');

    // const todosDb = db.db('Todos');
    // todosDb.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('5c2ee6b3692c614b039ac5c7'),
    //     },
    //     {
    //         $set: {
    //             complited: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // });

    const userDb = db.db('User');
    userDb.collection('User').findOneAndUpdate(
        {
            _id: new ObjectID('5c2e30d6efe4730d402f0c0f')
        },
        {
            $set: {
                    name: 'Mike'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

});
