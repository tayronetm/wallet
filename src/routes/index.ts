import { Router } from 'express';

import operantionsRouter from './operations.routes';

const routes = Router();

routes.use('/operations', operantionsRouter);

export default routes;
