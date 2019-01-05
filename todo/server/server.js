const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    complited: {
        type: Boolean,
        default: false
    },
    complitedAt: {
        type: Number,
        default: null
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
    text: ' Edit this video '
});

// newOtherTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unabel to save todo', err);
// });


const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const newUser = new User({
    email: 'meemail@mail.com'
});

newUser.save().then((doc) => {
    console.log('User saved', JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('Unable to save user', err);
});
