const http = require('http');
const port = 2222;
const fs = require('fs');

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Node!');
    fs.readFile('nodejs.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error 404, Can not find the file you were looking for.');
        } else {
            res.write(data);
        }
        res.end();
    });
});


server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong...', error)
    } else {
        console.log('Server listening on port ' + port)
        console.log(`Server running on port ${port}`);
    }
})
