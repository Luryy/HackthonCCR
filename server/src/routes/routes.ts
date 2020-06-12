import { Express } from 'express';
import pointRoutes from './points-routes';
import optionsRoutes from './options-routes';

export default (app: Express) => {
    pointRoutes(app);
    optionsRoutes(app);
};