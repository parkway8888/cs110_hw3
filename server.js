const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/breed/akita') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Info about Akita\n');
    } else if(req.url === '/breed/germanshepherddog') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about German Shepherd Dog");
    }
	else if(req.url === '/breed/labradorretriever') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about Norwegian Buhund");
	}
	else if(req.url === '/breed/oldenglishsheepdog') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about Range Rover");
    }
	else
	{
		res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Error");
	}
});

httpServer.listen(3018);