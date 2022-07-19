const express = require('express');
const router = express.Router();

const anthemFormat = function (data){
    const notFound = '{"*":"<div class='
    const key = Object.keys(data.query.pages)
    const dataBody =  data.query.pages[key].revisions[0]
    const stringifiedDataBody = JSON.stringify(dataBody)
    const anthemBody = stringifiedDataBody.split('<b>Anthem:</b>').pop().split('\" class=')[0]
    const anthemFull = anthemBody.split('href=\\\"/wiki/').pop().split('\\')[0]
    const anthem = anthemFull.split('#')[0]
    if (anthem !== notFound){
      return anthem
    }else{
      return false
    }
  }
  // Go to a anthem/country route and get back the national anthem url. It does it's best
  router.get('/anthem/:country', (req, res) => {
    const country = req.params.country
    fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${country}&rvsection=0&rvparse`)
    .then(res => res.json())
    .then((data) => {
      anthem = anthemFormat(data)
      console.log('anthem:', anthem)
      return fetch(`https://en.wikipedia.org/w/api.php?action=parse&prop=images&page=${anthem}&format=json`)
        .then(res => res.json())
          .then((data) => {
            const mediaWithAudio = data.parse.images.filter((file)=>{
              return file.includes('.ogg')
            })
              fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=File:${mediaWithAudio[0]}&prop=imageinfo&iilimit=50&iiend=2007-12-31T23%3A59%3A59Z&iiprop=timestamp%7Cuser%7Curl&format=json`)
              .then(res => res.json())
                .then((data) => {
                  const keys = Object.keys(data.query.pages)
                  // console.log('keys:',keys[0])
                  const anthemUrl = data.query.pages[keys[0]].imageinfo[0].url
                  res.json({anthemUrl})
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
  router.get('/language/:language', (req, res) => {
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




module.exports = router;