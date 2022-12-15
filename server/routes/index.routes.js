import { Router } from 'express';
import { addPlants, getPlants } from '../controllers/plants.controller.js';

export const indexRouter = Router();

indexRouter.get('/plants', getPlants);
indexRouter.post('/plants/add', addPlants);
