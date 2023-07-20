import express from 'express';
import BusinessController from "../controllers/business.controller.js";

const BusinessRouter = express.Router();

BusinessRouter.get('/', BusinessController.getAllBusiness);
BusinessRouter.get('/:email', BusinessController.getBusinessByEmail);
BusinessRouter.get('/exists/:email', BusinessController.businessExist)
BusinessRouter.post('/add', BusinessController.createBusiness);
BusinessRouter.post('/login', BusinessController.login);
BusinessRouter.patch('/update/:email', BusinessController.updateBusinessByEmail);
BusinessRouter.delete('/delete/:email', BusinessController.deleteBusinessByEmail);

export default BusinessRouter;