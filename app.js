const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/tutGalaxyTest';

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
  
  db.collection('cars').insertOne({hi: 5})
  // db.collection('cars').insertOne({
  //   model: 'Ford',
  //   year: '2004'
  // })
  db.close();

})