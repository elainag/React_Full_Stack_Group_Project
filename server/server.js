const express = require('express');
const app = express();


const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('react_app');

    const TeleportCollection = db.collection('countries');
    const scoresCollection = db.collection('scores');
    const countriesRouter = createRouter(TeleportCollection);

    const scoresRouter = createRouter(scoresCollection);
    app.use('/api/countries', countriesRouter);
    app.use('/api/scores', scoresRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`React-Group-Project server running on port ${this.address().port}`);
});

