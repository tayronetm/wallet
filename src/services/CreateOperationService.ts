import { getRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Operation from '../models/Operation';

interface Request {
	code: string;
	quantity: number;
	type: string;
	currentValue: number;
	costPrice: number;
	date: Date
}

class CreateOperationService {
  public async execute({code, quantity, type, currentValue, costPrice, date}: Request): Promise<Operation> {
		
		const operationRepository = getRepository(Operation);

		const operation = operationRepository.create({
			code,
			quantity,
			type,
			date,
			currentValue, 
			costPrice,
		});

		await operationRepository.save(operation);

		return operation;

  }
}

export default CreateOperationService;
