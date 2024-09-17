import express from 'express'
import nunjucks from 'nunjucks'

const app = express()

app.use(express.static('public'))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', (req, res) => {
  console.log(req.query)
  const name = req.query.name
  res.render('index.njk', {
      title: 'Hello world',
      message: `Hej på er te22, jag heter ${name}!`
  })
})

app.get("/watch", (req, res) => {
  const movieID = req.query.v
  console.log(movieID)
  const movies = {
    "ETTID": {
        title: "The Shawshank Redemption",
        year: 1994,
        description: "Best movie ever"
    },
    "TVÅID": {
        title: "The Godfather",
        year: 1972,
        description: "Best movie ever"
    },
  }
  const movie = movies[movieID]
  res.render('watch.njk', {
      title: 'Watch',
      movie: movie,
  })
  //  res.json(movie)
})

app.get('/ytub', (req, res) => {
  const ID = req.query.v
  console.log(ID)
  res.render('ytub.njk', {
      title: 'YouTube',
      youtubeID: ID,
  })
})
// localhost:3000/ytub?v=F9Ptmx32laY


app.use((req, res) => {
    res.status(404).send('404 - Not found')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})