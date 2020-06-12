// to upload files -- should define the destination and filesize

import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

class Upload{

    _storage(rote) { 
        return multer.diskStorage({
            destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, rote))
            },
            filename: function (req, file, cb) {
                const hash = crypto.randomBytes(6).toString("hex");
                const filename = `${hash}-${file.originalname}`
                cb(null, filename)
            }
        })
    }

    _checkImg(){
        return function(req, file, cb){
            // Allowed ext
            const filetypes = /jpeg|jpg|png/;
            // Check ext
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
            // Check mime
            const mimetype = filetypes.test(file.mimetype);
            if(mimetype && extname){
            return cb(null,true);
            } else {
            cb('Error: Images Only!');
            }
        }
    }

    upload(rote, size) { 
        return multer({ 
            storage: this._storage(rote),
            limits: {fileSize: size},
            fileFilter: this._checkImg()
        })
    }
        
}

export default Upload;