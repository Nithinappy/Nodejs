const http= require('http');

const server = http.createServer((req,res)=>{
    // console.log(req);
    // process.exit(); //to exit the event loop of a server


    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First Server Page</title></head>')
    res.write('<body><h1>My First Server Page</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(3000)