import express from "express" // ESM
import nunjucks from "nunjucks"
const app = express()
nunjucks.configure("views", {
  autoescape: true,
  express: app,
})
app.use(express.static("public"))
app.get("/", (request, response) => {
  response.render("index.njk", {
    message: "Hemsidan nunjuckad och klar weee!",
    title: "Hem",
  })
})
app.get("/om", (request, response) => {
  response.render("om.njk", {
    message: "Omsidan!",
    title: "Om",
  })
})


app.get("/readme", (request, response) => {
  console.log(request)
  response.json({
    message: "Hello World",
  })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
