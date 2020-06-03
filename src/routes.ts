import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

/**
 * ANOTATION
 * 🇺🇸 Max methods per controller: index, show, create, update, delete
 * */

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Server has running' });
});

routes.get('/items', ItemsController.index);

routes.post('/points', PointsController.create);
routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);

export default routes;
