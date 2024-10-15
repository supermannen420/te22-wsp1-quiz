import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import bodyParser from "body-parser"
// npm i body-parser
import indexRouter from "./routes/index.js"
import searchRouter from "./routes/search.js"
import quizRouter from "./routes/quiz.js"

const app = express()

nunjucks.configure("views", {
    autoescape: true,
    express: app
})
app.use(express.static("public"))
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRouter)
app.use("/search", searchRouter)
app.use("/quiz", quizRouter)

// testa med att surfa localhost:3000/asdfhjk
app.use((req, res) => {
//    res.status(404).send("404 - Not found")
  res.status(404).render("404.njk", {
      title: "404 - Not found",
  })
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})