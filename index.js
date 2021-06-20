const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo");
});

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
});

app.get('/ola/:nome/:cargo/:cor', function(req, res){
    res.send("<h1>ola "+req.params.nome+"</h1>"+"<h2> Seu cargo e: "+req.params.cargo+"</h2>"+"<h3> Sua cor favorita e: "+req.params.cor+"</h3>")
    
});

app.listen(8081, function(){
    console.log("Servidor rodando");
});