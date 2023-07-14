import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import logger from './utilities/logger.js';
import connectDatabase from './configs/database.js';
import BusinessRouter from './routes/business.route.js';
import CustomerRouter from './routes/customer.route.js';
import EmployeeRouter from './routes/employee.route.js';
import FinanceRouter from './routes/finance.route.js';
import InventoryRouter from './routes/inventory.route.js';

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

//routes
app.use('/business', BusinessRouter);
app.use('/customer', CustomerRouter);
app.use('/employee', EmployeeRouter);
app.use('/finance', FinanceRouter);
app.use('/inventory', InventoryRouter);