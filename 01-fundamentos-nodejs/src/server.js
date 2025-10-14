// Por padrão os imports do Node utiliza-se CommonJS => Require
// A forma mais moderna é usando o ESModules => import/export
// Para utilizar ESModules é preciso acrescentar no package.json "type": "module",
// ! const http = require('http'); // ! CommonJS => require
import http from 'node:http';

// * Aplicações HTTP => APIs
/**
 * * Rotas comuns (CRUD)
 * * - Criar usuários (Método HTTP POST)
 * * - Listar usuários (Método HTTP GET)
 * * - Editar de usuários (Método HTTP PATCH OU PUT)
 * * - Remover usuários (Método HTTP DELETE)
 */

// * Os métodos são mais semânticos
// * GET => Buscar um recurso do back-end
// * POST => Criar um recurso no back-end
// * PUT => Editar ou atualizar um recurso no back-end
// * PATCH => Atualizar uma informação específica de um recurso no back-end
// * DELETE => Deletar um recurso do back-end

const server = http.createServer((req, res) => {
	const { method, url } = req; // req.method e req.url utilizando desestruturação de objetos {}

	// Early return
	// * Criando um endpoint /users para o método GET
	if (method === 'GET' && url === '/users') {
		return res.end('Listagem de usuários');
	}

	// * Criando um endpoint /users para o método POST
	if (method === 'POST' && url === '/users') {
		return res.end('Criação de usuários');
	}
	console.log(method, url);

	return res.end('Olá, Mundo');
});

console.log('Servidor escutando...');
server.listen(3333);
