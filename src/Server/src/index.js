const data = require("./controllers/data")
const url = require('url')
const  http = require("http")  

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')

    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;
    const parts = pathname.split("/");
    const characterId = parts[3]
if (pathname.startsWith("/rickandmorty/character")) {
    
    
    
    const character = data.characters.find(char => char.id === parseInt(characterId));
    
    if (character) {
      
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    } else {
     
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Character not found");
    }
  } else {
    
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
})
server.listen(3001, "localhost")