import { getRepository } from 'typeorm';
import { Router } from 'express';
import CreateOperationService from '../services/CreateOperationService';
import OperationStock from '../models/Operation';
import DeleteOperationService from '../services/DeleteOperationService';
import UpdateOperationService from '../services/UpdateOperationService';

const operantionsRouter = Router();

operantionsRouter.get('/', async (request, response) => {
	const operationsRepository = getRepository(OperationStock);

	const operations = await operationsRepository.find();

	return response.json(operations);
});

operantionsRouter.post('/', async (request, response) => {
	const {code, quantity, type, currentValue, costPrice, date} = request.body;

	const operationService = new CreateOperationService(); 

	const operation = await operationService.execute({code, quantity,type, currentValue, costPrice, date});

	return response.json(operation);
});

operantionsRouter.delete('/:id', async (request, response) => {
	const {id} = request.params;

	const operationService = new DeleteOperationService();

	await operationService.execute(id);

	return response.status(204).send();

});

operantionsRouter.put('/:id', async (request, response) => {
	const {id} = request.params;
	const body = request.body;

	const operationService = new UpdateOperationService();

	const updateOperation = await operationService.execute(id, body);

	return response.json(updateOperation);

});

export default operantionsRouter;
