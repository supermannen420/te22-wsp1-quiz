# webbserver intro

För att köra webbserver har vi installerat WSL och Node.

## Installation

Vi behöver WSL2 för att köra node, eller det gör livet enklare, bättre och snabbare.
Guide till att installera WSL2 finns här: [https://docs.microsoft.com/en-us/windows/wsl/install-win10](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

WSL står för Windows Subsystem for Linux och är en Linux-kärna som körs i Windows. Detta gör att vi kan köra Linux-kommandon i Windows.
Vi kommer att använda Ubuntu som Linux-distribution.

### Installera Ubuntu

1. Öppna Microsoft Store
2. Sök efter Ubuntu
3. Klicka på Ubuntu och Installera
4. Starta Ubuntu
5. Skapa ett användarnamn och lösenord

#### Uppdatera Ubuntu

För att se till att Ubuntu är uppdaterat kör följande kommandon:

```bash
sudo apt update
sudo apt upgrade
```

Sudo är superuser do och används för att köra kommandon som kräver administratörsrättigheter. Apt är ett verktyg för att installera och uppdatera program i Ubuntu.
Så med andra ord kör du typ windows update som datoradministratör.

### Installera Node med NVM

NVM står för Node Version Manager och är ett verktyg för att installera och hantera olika versioner av Node.js.

[Guide](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) för att installera Node.js med NVM.

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

## Installera Nodemon

Nodemon är ett verktyg som används för att övervaka förändringar i din källkod och automatiskt starta om servern när du sparar en fil.

Installera Nodemon genom att köra:

```bash
npm install nodemon --save-dev
```

Lägg till ett script i `package.json` för att starta servern med Nodemon. Lägg till `"start": "nodemon server.js"` i `scripts` i `package.json` så att det ser ut så här:

```json
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```


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
