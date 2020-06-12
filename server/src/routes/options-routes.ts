import { Express, Request as Req, Response as Res } from 'express'; 

import OptionsController from '../controllers/OptionsController';
const optionsController = new OptionsController();

export default (app: Express) => {
    const routes = OptionsController.routes();

    app.get(routes.options, optionsController.index);
}