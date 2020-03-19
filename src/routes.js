import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DestinosController from './app/controllers/RecipientsController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/destination', DestinosController.store);
routes.put('/destination/:id', DestinosController.update);

export default routes;
