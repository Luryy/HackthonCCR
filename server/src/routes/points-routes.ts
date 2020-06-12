import { Express, Request as Req, Response as Res } from 'express'; 

import PointsController from '../controllers/PointsController';
const pointsController = new PointsController();

export default (app: Express) => {
    const routes = PointsController.routes();

    app.route(routes.point)
        .get(pointsController.index)
        .post(pointsController.create);

    app.get(routes.point, pointsController.show)
}