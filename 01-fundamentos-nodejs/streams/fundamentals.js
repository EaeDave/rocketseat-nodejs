// Exemplos de streaming:
// Netflix & Spotify

// * Conceito - Processar arquivos/entidades progressivamente e já manipular o que já foi processado

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000 linhas
// POST /upload import.csv

// 10mb/s - 100s

// * Readable Streams / Writable Streams

// Streams ->
// * Tudo que estou recebendo como entrada: process.stdin
// * Eu estou encaminhando para a saída: .pipe(process.stdout)
// process.stdin.pipe(process.stdout);

import { Readable } from 'node:stream';

class oneToHundredStream extends Readable {
	index = 1;
	_read() {
		const i = this.index++;

		setTimeout(() => {
			if (i > 100) {
				this.push(null);
			} else {
				const buf = Buffer.from(String(i));
				this.push(buf);
			}
		}, 1000);
	}
}

new oneToHundredStream().pipe(process.stdout);
