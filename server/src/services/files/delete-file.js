import path from 'path';

import fs from 'fs';

class Delete{

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static deleteFile(rote){
        fs.unlink(path.resolve(__dirname, rote), function (err) { 
            if (err) return console.log(err); 
            // if no error, file has been deleted successfully
        });
    }

}

export default Delete;