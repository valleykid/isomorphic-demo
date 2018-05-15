var Hapi = require('hapi');

var server = new Hapi.server({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, h) {
    return 'hello world';
  }
});

server.start();
console.log('Server running at:', server.info.uri);
