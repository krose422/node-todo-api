// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.')

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Laundry'
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Walk Locks'
  // }).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({
  //   name: 'Kelley Medica'
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({
    _id: new ObjectID('5974aaa30b134362cb97f8da')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // remove duplicates by many
  // remove one other by id


  // db.close();
});
