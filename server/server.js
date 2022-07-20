const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors())
app.use(express.json());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const wikipediaRouter = require('./helpers/wikipedia_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('react_app');

    const countriesCollection = db.collection('countries');
    const countriesRouter = createRouter(countriesCollection);
    app.use('/api/countries', countriesRouter);

    const citiesCollection = db.collection('cities');
    const citiesRouter = createRouter(citiesCollection);
    app.use('/api/cities', citiesRouter);

    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
   


    // app.use('/api/scores', scoresRouter);

    app.use('/api/users', usersRouter);
    app.use('/api/wiki', wikipediaRouter)

  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`React-Group-Project server running on port ${this.address().port}`);
});

