import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import logger from './utilities/logger.js';
import connectDatabase from './configs/database.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    logger.info(`Server has started and running on ${PORT}`)
    connectDatabase();
})

app.get('/', (req, res) => {
    res.json('General Purpose ERP Backend')
})