import { Request as Req, Response as Res } from 'express'; 
import knex from '../database/connection';

class OptionsController{

    static routes() {
        return{
            options: '/options',
        }
    }

    async index (req: Req, res: Res){
        const options = await knex('options').select('*');

        const serializedOptions = options.map(option => {
            return {
                id: option.id,
                title: option.title,
                image_url: `/static/${option.image}`,
            };
        });
    
        res.json(serializedOptions);
    }
}

export default OptionsController;