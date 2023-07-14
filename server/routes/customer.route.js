import express from 'express';
import CustomerController from "../controllers/customer.controller.js";

const CustomerRouter = express.Router();

CustomerRouter.get('/', CustomerController.getAllCustomer);
CustomerRouter.get('/get/business/:id', CustomerController.getAllCustomerByBusiness);
CustomerRouter.get('/:id', CustomerController.getCustomerById);
CustomerRouter.post('/add', CustomerController.createCustomer);
CustomerRouter.patch('/update/:id', CustomerController.updateCustomerById);
CustomerRouter.delete('/delete/:id', CustomerController.deleteCustomerById);

export default CustomerRouter;