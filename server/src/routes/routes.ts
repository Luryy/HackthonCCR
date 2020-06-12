import { Express } from 'express';
import pointRoutes from './points-routes';

export default (app: Express) => {
    pointRoutes(app)
};