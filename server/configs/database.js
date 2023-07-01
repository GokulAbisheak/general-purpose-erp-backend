import mongoose from 'mongoose';
import logger from '../utilities/logger.js';
import dotenv from 'dotenv';

dotenv.config();

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        logger.info(`Database Connection Success`)
    }).catch((err) => {
        logger.error(`Database Connection Failed : ${err}`)
    })
}

export default connectDatabase;
