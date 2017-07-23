// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5974b426dc5dabf54358e30f')
  // },
  // {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // update name to my name & use inc to increment age by one

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5974a9eea8627362bdb7e176')
  },
  {
    $set: {
      name: 'Kelley Rose'
    },
    $inc: {
      age: -4
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });

  // db.close();
});
