import { Express, Request as Req, Response as Res } from 'express';

import CommentsController from '../controllers/CommentsController';
const commentsController = new CommentsController();

export default (app: Express) => {
    const routes = CommentsController.routes();

    app.post(routes.comment, commentsController.create);
}