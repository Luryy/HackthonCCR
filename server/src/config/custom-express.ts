import express from 'express'; 
import path from 'path';

const app = express();

app.use(express.json());

app.use('/static', express.static(path.resolve(__dirname, '..', 'assets')));

import routes from '../routes/routes';
routes(app);


export default app;