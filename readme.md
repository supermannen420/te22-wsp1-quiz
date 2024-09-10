# webbserver intro

För att köra webbserver har vi installerat WSL och Node.

## Linux commandon

* pwd - visar aktiv mapp
* ls - listar alla filer i mappen
* ll - visar även dolda filer, är ett alias för ls -la
* cd -

## Node

För att initiera ett nytt node projekt kör jag `npm init -y` i en mapp. Detta skapar en package.json fil.

```bash
mkdir serverprojekt
cd serverprojekt
npm init -y
```

```js
console.log("hejsan svejsan")
```

För node installerade vi express och nodemon.
För att avsluta node som körs med nodemon tryck `ctrl + c`

Vi skapade även en gitignore fil med kommandot `echo node_modules > .gitignore`
för att ignorera node_modules mappen när vi pushar till github.

## Express

Vi skapade en express server med lite start kod. Vi skapade en route och prova att lägga in statiskt innehåll.

```js
import express from "express" // ESM
const app = express()
app.use(express.static ("public"))
app.get("/", (request, response) => {
  response.send("Jepp, det funkar!")
})
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
```

För att skicka statiska filer så används en mapp som heter public. I public mappen lägger vi våra filer som ska skickas.

## Nunjucks
