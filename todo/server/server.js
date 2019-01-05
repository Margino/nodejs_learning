const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    complited: {
        type: Boolean
    },
    complitedAt: {
        type: Number
    }
});

const newTodo = new Todo({
    text: 'Cook diner'
});

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unabel to save todo', err);
// });



const newOtherTodo = new Todo({
    text: 'Cook coffee',
    complited: true,
    complitedAt: 123
});

newOtherTodo.save().then((doc) => {
    console.log('Saved todo', JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unabel to save todo', err);
})
