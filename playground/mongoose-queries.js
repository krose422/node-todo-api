const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5974f1ea55aec466fe795880';
// if (!ObjectID.isValid('5974f1ea55aec466fe795880')) {
//   console.log('ID not valid.')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Single todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Todo by ID not found.')
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


var id = '5974c189eded6264f3b70ec4';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User by given ID not found.')
  }

  console.log('User by ID', user)
}).catch((e) => console.log('Error requesting user', e));
