const express = require("express");
const log = console.log;
const app = express();
const path = require("path");

//chunk2
//data parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html")); 
})

//static files
app.use(express.static(path.join(__dirname,"public")));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

console.log(path.join(__dirname,"public","index.html"));