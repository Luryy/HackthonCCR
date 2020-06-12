import { Request as Req, Response as Res } from 'express'; 

class PointsController{

    static routes() {
        return{
            points: '/points',
            point: '/points/:id',
        }
    }

    async index (req: Req, res: Res){
    }

    async show (req: Req, res: Res){
    }

    async create (req: Req, res: Res){
    }
}

export default PointsController;