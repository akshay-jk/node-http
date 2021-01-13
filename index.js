// 2 endpoints are made
// one for all data & another for filter data like price only

//hit on http://localhost:PORT/ for all data
//hit on http://localhost:3000/?filter=FILTER_TERM

//['price','size','review','color','description']

//Node version 14.15.3

const PORT = 3000;


const http = require('http');
const url = require('url');

const { getDetails, returnByFilter } = require('./controller');

const server = http.createServer((req, res) => {
    const QueryObject = url.parse(req.url, true).query;

    try {
        if (req.url == '/' && req.method == 'GET') {
            res.statusCode = 200;
            res.setHeader('content-type', 'Application/json');
            getDetails(req, res);
        } else if (JSON.parse(JSON.stringify(QueryObject)) && req.method == 'GET') {
            res.statusCode = 200;
            res.setHeader('content-type', 'Application/json');
            returnByFilter(req, res);
            res.end();
        }
    } catch (e) {
        console.log(e)
        res.statusCode = 404;
        res.end('Parameter error');
    }

});


server.listen(PORT, '127.0.0.1', () => {
    console.log(`server running on ${PORT}`);
});