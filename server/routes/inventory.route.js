import express from 'express';
import InventoryController from "../controllers/inventory.controller.js";

const InventoryRouter = express.Router();

InventoryRouter.get('/', InventoryController.getAllInventory);
InventoryRouter.get('/get/business/:id', InventoryController.getAllInventoryByBusiness);
InventoryRouter.get('/:id', InventoryController.getInventoryById);
InventoryRouter.post('/add', InventoryController.createInventory);
InventoryRouter.patch('/update/:id', InventoryController.updateInventoryById);
InventoryRouter.delete('/delete/:id', InventoryController.deleteInventoryById);

export default InventoryRouter;