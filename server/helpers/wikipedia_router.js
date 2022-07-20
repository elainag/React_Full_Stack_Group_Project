const express = require('express');
const router = express.Router();
const parseInfo = require("infobox-parser")

// Function used to format country infobox text into national anthem string
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
      return null
    }
}

// Function used to format country infobox text into languages string
const languagesFormat = function (data){
    const foundLanguages = []
    const notFound = '{"*":"<div class='
    const key = Object.keys(data.query.pages)
    const dataBody =  data.query.pages[key].revisions[0]
    const stringifiedDataBody = JSON.stringify(dataBody)

    const info = parseInfo(stringifiedDataBody)
    // console.log(info)

    foundLanguages.push(info.general.languages,info.general.officialLanguages)
    const languages = foundLanguages.filter(language => {
        return language !== undefined;
    })

    if(languages.length !== 0){
        return languages
    }else{
        const languagesBackup = deepLanguageParse(stringifiedDataBody)
        return languagesBackup
    }
}
// Back up in case infobox-parser fails
const deepLanguageParse = function (stringifiedDataBody){
    const languagesData = []
    if (stringifiedDataBody.includes('official_language')){
        let body = stringifiedDataBody.split('official_language').pop().split('          = ')[0]
        let regex = /\[([^\][]*)]/g;
        while (m = regex.exec(body)) {
        languagesData.push(m[1]);
        }
    }else if(stringifiedDataBody.includes('languages              = ')){
        let body = stringifiedDataBody.split('languages              = ').pop().split('          = ')[0]
        let regex = /\[([^\][]*)]/g;
        while (m = regex.exec(body)) {
        languagesData.push(m[1]);
        }
    }
    const filteredLanguageData = languagesData.map((language)=>{
        return language.split('|')[0]
    })
    const languages = filteredLanguageData.filter((result)=>{
        return result.includes('language') ||
        result.includes('Standard')
    }).filter((result)=>{
        return !result.includes('Official') ||
        !result.includes('Regional') ||
        !result.includes('National')
    })


    // only return strings over two words if the second word is language
    return languages
}


// Function used to get past redirects. (Find true page URL)
const checkRedirects = function (input){
    return fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=langlinks&format=json&lllimit=10&titles=${input}&redirects=`)
        .then(res => res.json())
            .then((data) => {
            if (data.query.redirects){
                return data.query.redirects[0].to
            }else{
                return input
            }
        })
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
    })
}


// Country
// takes in the country name and outputs country name wikipediafied
router.get('/:country', (req, res) => {
const country = req.params.country
checkRedirects(country).then((wikipediafied)=>{
    res.json(wikipediafied)
})
    .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
    });
})

// Country/Languages
// takes in a country and returns languages of the country (non wikipedified)
router.get('/:country/languages', (req, res) => {
    const country = req.params.country
    fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${country}&rvsection=0`)
        .then(res => res.json())
        .then((data) => {
            const languagesFound = languagesFormat(data)
            res.json(languagesFound)
        })

    .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
    });
    })



// Country/Anthem
// Go to a anthem/country_name(wikiformat) route and get back the national anthem url. It does it's best
// todo: better filter: for countries with multiple anthems (Denmark), for no anthem displayed (Ireland)
// Optimised for robustness instead of performance. Remove checkRedirects for performance
router.get('/:country/anthem', (req, res) => {
const country = req.params.country
fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${country}&rvsection=0&rvparse`)
.then(res => res.json())
.then((data) => {
    const anthem = anthemFormat(data)
    // console.log('anthem:', anthem)
    if (anthem !== null) {
      checkRedirects(anthem).then((wikipediafied)=>{
      return fetch(`https://en.wikipedia.org/w/api.php?action=parse&prop=images&page=${wikipediafied}&format=json`)
      .then(res => res.json())
          .then((data) => {
          const mediaWithAudio = data.parse.images.filter((file)=>{
              return file.includes('.ogg')
          })
              fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=File:${mediaWithAudio[0]}&prop=imageinfo&iilimit=50&iiend=2007-12-31T23%3A59%3A59Z&iiprop=timestamp%7Cuser%7Curl&format=json`)
              .then(res => res.json())
              .then((data) => {
                  const keys = Object.keys(data.query.pages)
                  // console.log(data.query.pages[keys[0]].imageinfo[0].url)
                  if (data.query.pages[keys[0]].imageinfo){
                    const anthemUrl = data.query.pages[keys[0]].imageinfo[0].url
                    res.json(anthemUrl)
                  }else{
                    res.json(null)
                  }
              })    
          })
      })
    }
})
.catch((err) => {
  console.error(err);
  res.status(500);
  res.json({ status: 500, error: err });
  });
})

// Language
// takes in a wikipedia url example: berber_languages, and outputs links to webm files
router.get('/language/:language', (req, res) => {
const language = req.params.language
checkRedirects(language).then((wikipediafied)=>{
fetch(`https://en.wikipedia.org/w/api.php?action=parse&prop=images&page=${wikipediafied}&format=json`)
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
    })
})
})
})

router.get('/:country/summary', (req, res) => {
  const country = req.params.country
  fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${country}`)
  .then(res => res.json())
      .then((data) => {
      if (data.query.redirects){
          return data.query.redirects[0].to
      }else{
          return input
      }
  })
      .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
      });
  })
  

module.exports = router;
