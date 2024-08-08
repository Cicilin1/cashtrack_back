import 'dotenv/config';
import express, { json } from 'express';

import { setupMongo } from './database';
import { routes } from './routes';
import { errorHandler } from './middleware/error-headler.middleware';


setupMongo().then(() => {
    const app = express();

    app.use(json());
    app.use(routes)
    app.use(errorHandler)

    app.listen(3333, () => console.log('🚀 running port 3333!'));

})



