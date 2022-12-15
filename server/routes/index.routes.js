import { Router } from 'express';
import { getPlants } from '../controllers/plants.controller.js';

export const indexRouter = Router();

indexRouter.get('/getallplants', getPlants);
