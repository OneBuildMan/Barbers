const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header
    res.setHeader('Content-type', 'text/html');

    let path = './fe/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        default:
            path += '404.html';
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})