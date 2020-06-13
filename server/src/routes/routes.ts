import { Express } from 'express';
import pointRoutes from './points-routes';
import optionsRoutes from './options-routes';
import commentsRoutes from './comments-routes';

export default (app: Express) => {
    pointRoutes(app);
    optionsRoutes(app);
    commentsRoutes(app);
};