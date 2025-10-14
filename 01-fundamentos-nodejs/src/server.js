// Por padrão os imports do Node utiliza-se CommonJS => Require
// A forma mais moderna é usando o ESModules => import/export
// Para utilizar ESModules é preciso acrescentar no package.json "type": "module",
// ! const http = require('http'); // ! CommonJS => require
import http from 'node:http';

// * Aplicações HTTP => APIs
const server = http.createServer((req, res) => {
	return res.end('Olá, Mundo');
});

console.log('Iniciando server...');
server.listen(3333);
