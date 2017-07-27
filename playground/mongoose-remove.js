const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// returns doc
// Todo.findOneAndRemove({}).then((result) => {
//
// })

// returns doc
Todo.findByIdAndRemove('597a677e9dd28fc2d8880550').then((todo) => {
  console.log(todo);
});
