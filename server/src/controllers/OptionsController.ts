import { Request as Req, Response as Res } from 'express'; 

class OptionsController{

    static routes() {
        return{
            options: '/options',
        }
    }

    async index (req: Req, res: Res){
    }
}

export default OptionsController;