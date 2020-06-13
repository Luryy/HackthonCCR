import { Request as Req, Response as Res } from 'express'; 
import knex from '../database/connection';

class CommentsController{

    static routes() {
        return{
            comment: '/comment/:point_id',
        }
    }

    async create (req: Req, res: Res){

        const { point_id } = req.params;

        const {
            comment,
            author,
            note
        } = req.body

        const info = {
            point_id,
            comment,
            author,
            note
        }

        await knex('point_comments').insert(info);

        res.json( {info} )
    }

}

export default CommentsController;