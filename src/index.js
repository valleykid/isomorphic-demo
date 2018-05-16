import Hapi from 'hapi';

const server = new Hapi.server({
  host: 'localhost',
  port: 8000,
});

server.route({
  method: 'GET',
  path: '/',
  handler(request, h) {
    return 'hello world';
  },
});

server.start();
console.log('Hapi server running at:', server.info.uri);
