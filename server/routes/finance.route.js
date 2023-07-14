import express from 'express';
import FinanceController from "../controllers/finance.controller.js";

const FinanceRouter = express.Router();

FinanceRouter.get('/', FinanceController.getAllFinance);
FinanceRouter.get('/get/business/:id', FinanceController.getAllFinanceByBusiness);
FinanceRouter.get('/:id', FinanceController.getFinanceById);
FinanceRouter.post('/add', FinanceController.createFinance);
FinanceRouter.patch('/update/:id', FinanceController.updateFinanceById);
FinanceRouter.delete('/delete/:id', FinanceController.deleteFinanceById);

export default FinanceRouter;