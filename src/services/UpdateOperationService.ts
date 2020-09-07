import { getRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Operation from '../models/Operation';
import OperationStock from '../models/Operation';

class UpdateOperationService {
  public async execute(id: string, body: OperationStock) {
		
		const operationsRepository = getRepository(Operation);

		const findOperation = await operationsRepository.findOne(id);

		if (!findOperation) {
			throw new Error('Operação não encontrada');
		}

		operationsRepository.merge(findOperation, body);
		const result = await operationsRepository.save(findOperation);
		return result;


  }
}

export default UpdateOperationService;
