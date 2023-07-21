

// web server


const http = require('http');

const server = http.createServer(function(req, res){

    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-control-Allow-Origin', "*");
    res.writeHead(200);

    let dataObj = {"Id":1234, "nome":"Bob", "mail":"teste@gmail.com"};
    let data = JSON.stringify(dataObj)
    res.end(data);
});




server.listen(1234, function(){

console.log("The a server is working.")

})
