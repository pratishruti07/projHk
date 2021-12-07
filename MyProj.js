const http = require('http');
const file = require('fs');

http.createServer((request,response) => {
    response.writeHead(200,{"Content.Type":"text/html"})

    if(request.url === "/coffee" || request.url === "/" ){

        let content = file.readFileSync("Coffee.html");
        response.write(content);

    }else{
        let content = file.readFileSync("orderplaced.html");
        response.write(content);

    }
    response.end();
}
   
).listen(9090,()=>{console.log("server started.")})