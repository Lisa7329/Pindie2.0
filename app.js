const http = require('http');
const controllers = require('./controllers');

const server = http.createServer((req, res) => {
    let url = req.url;
    let data = '';

    switch (url) {
        case "/":
            controllers.mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            controllers.gameRouteController(res);
            break;
        case "/vote":
            controllers.voteRouteController(req, res);
            break;
        default:
            controllers.defaultRouteController(res, url);
    }
});

server.listen(3005);