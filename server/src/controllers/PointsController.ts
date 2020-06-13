import { Request as Req, Response as Res } from 'express'; 
import knex from '../database/connection';

class PointsController{

    static routes() {
        return{
            points: '/points',
            point: '/points/:id',
        }
    }

    async index (req: Req, res: Res){

        const points = await knex('points');

        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `/static/points/${point.image}`,
            };
        });

        return res.json(serializedPoints);
    }

    async show (req: Req, res: Res){
        const { id } = req.params;

        const point = await knex('points').where('id', id).first();

        if(!point){
            return res.status(400).json({menssage: "Point not found"});
        }

        const serializedPoint = 
             {
                ...point,
                image_url: `/static/points/${point.image}`,
            };
        

        const options = await knex('options')
            .join('point_options', 'options.id', '=', 'point_options.option_id')
            .where('point_options.point_id', id)
            .select('options.title');

        const description = await knex('point_comments')
            .where('point_comments.point_id', id)
            .select('comment', 'author', 'note')
            .limit(10);

        const average = await knex('point_comments')
            .avg('note as Average');

        return res.json({point: serializedPoint, options, average, description});
    }

    async create (req: Req, res: Res){
        const {
            name,
            price,
            stops,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            options
        } = req.body
    
    
        const trx = await knex.transaction();

        const point = {
            image: req.file.filename,
            name,
            price,
            stops,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
    
        const insertedIds = await trx('points').insert(point)
    
        const point_id = insertedIds[0];
        
    
        const pointIds = String(options)
            .split(',')
            .map(option => Number(option.trim()))
            .map((option_id: Number)=>{
            return {
                option_id,
                point_id,
            }
        });
    
        await trx('point_options').insert(pointIds);
    
        await trx.commit();
    
        return res.json({
            id: point_id,
            ...point
        });
    }
}

export default PointsController;