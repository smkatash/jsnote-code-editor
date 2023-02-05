import express from "express";
import fs from "fs/promises";
import path from "path";

interface Cell {
	id: string;
	content: string;
	type: 'text' | 'code';
}

interface LocalApiError {
	code: string;
}

export const createCellsRouter = (filename: string, dir: string) => {
	const router = express.Router();
	router.use(express.json());
	const fullPath = path.join(dir, filename);
	
	router.get('/cells', async (request, response) => {
		const isLocalApiError = (err: any): err is LocalApiError => {
			return typeof err.code === 'string';
		};
		try {
			const result = await  fs.readFile(fullPath, { encoding: 'utf-8'});
			response.send(JSON.parse(result));
		} catch (err) {
			if (isLocalApiError(err)) {
				if (err.code === 'ENOENT') {
					await fs.writeFile(fullPath, '[]', 'utf-8');
					response.send([]);
				} else {
					throw err;
				}
			}
		}
	});
	router.post('/cells', async (request, response) => {
		const { cells }: {cells: Cell[]} = request.body;

		await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');
		response.send({status: 'ok'});
	});
	return router;
};
