import { getRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Operation from '../models/Operation';

class DeleteOperationService {
  public async execute(id: string) {
		
		const operationRepository = getRepository(Operation);

		const operation = await operationRepository.findOne(id);

		if (!operation) {
			throw new Error('Operação não existe')
		}

		await operationRepository.remove(operation);

  }
}

export default DeleteOperationService;
