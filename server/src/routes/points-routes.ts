import { Express, Request as Req, Response as Res } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer'; 


const uploads = multer(multerConfig);

import PointsController from '../controllers/PointsController';
const pointsController = new PointsController();

export default (app: Express) => {
    const routes = PointsController.routes();

    app.route(routes.points)
        .get(pointsController.index)
        .post(uploads.single('image'), pointsController.create);

    app.get(routes.point, pointsController.show)
}