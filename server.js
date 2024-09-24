import express from 'express'
import nunjucks from 'nunjucks'
import morgan from "morgan"

import indexRouter from './routes/index.js'

const app = express()

app.use(express.static('public'))
app.use(morgan("dev"))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use('/', indexRouter)

// testa med att surfa localhost:3000/asdfhjk
app.use((req, res) => {
//    res.status(404).send('404 - Not found')
  res.status(404).render('404.njk', {
      title: '404 - Not found',
  })
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})