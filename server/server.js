const express = require('express');
const app = express();


const cors = require("cors");

app.use(cors())
app.use(express.json());

app.get('/wiki/anthem/:country', (req, res) => {
  const country = req.params.country
  fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${country}&rvsection=0&rvparse`)
  .then(res => res.json())
  .then((data) => {
    anthem = anthemFormat(data)
    console.log(anthem)
    return fetch(`https://en.wikipedia.org/w/api.php?action=parse&prop=images&page=${anthem}&format=json`)
      .then(res => res.json())
        .then((data) => {
          const mediaWithAudio = data.parse.images.filter((file)=>{
            return file.includes('.ogg')
          })
          const promises = mediaWithAudio.map((file)=>{
            return fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=File:${file}&prop=imageinfo&iilimit=50&iiend=2007-12-31T23%3A59%3A59Z&iiprop=timestamp%7Cuser%7Curl&format=json`)
            .then(res => res.json())
              .then((data) => {
                return data.query
                // if(data.query.pages[-1].imageinfo[0].url){
                //   return data.query.pages[-1].imageinfo[0].url
                // }else{
                //   return data.query
                // }
              })
            })
    Promise.all(promises)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })
  })
})



// takes in a wikipedia url example: berber_languages, and outputs links to webm files
// todo: get .flac files, get mp3
app.get('/wiki/language/:language', (req, res) => {
  const language = req.params.language
  fetch(`https://en.wikipedia.org/w/api.php?action=parse&prop=images&page=${language}&format=json`)
  .then(res => res.json())
    .then((data) => {
      const mediaWithAudio = data.parse.images.filter((file)=>{
        // console.log(file.includes('.webm') || file.includes('.ogg'))
        return file.includes('.webm') || 
          file.includes('.ogg') || 
          file.includes('.flac') || 
          file.includes('.mp3') ||
          file.includes('.opus')
      })
      const promises = mediaWithAudio.map((file)=>{
        return fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=File:${file}&prop=imageinfo&iilimit=50&iiend=2007-12-31T23%3A59%3A59Z&iiprop=timestamp%7Cuser%7Curl&format=json`)
        .then(res => res.json())
          .then((data) => {
            return data.query.pages[-1].imageinfo[0].url
          })
      });
 
    Promise.all(promises)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })
})


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

