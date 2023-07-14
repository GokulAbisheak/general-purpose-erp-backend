import Inventory from "../models/inventory.model.js";
import Business from "../models/business.model.js";
import logger from "../utilities/logger.js";

const InventoryController = {
  //Get all inventories
  getAllInventory: async (req, res) => {
    try {
      const inventories = await Inventory.find();
      res.status(200).json(inventories);
    } catch (error) {
      res.status(500).json({ message: error });
      logger.error(`Error getting all inventories ${error.message}`);
    }
  },

    //Get all inventories by business
    getAllInventoryByBusiness: async (req, res) => {
        try {
          const business = await Business.findById(req.params.id);
    
          if (!business) {
            res
              .status(404)
              .json({ message: `Business with id ${req.params.id} not found` });
            return;
          }
    
          const inventories = await Inventory.find({ business: business });
          res.status(200).json(inventories);
        } catch (error) {
          res.status(500).json({ message: error });
          logger.error(`Error getting all inventories by business ${error.message}`);
        }
      },

  //Get inventory by email
  getInventoryById: async (req, res) => {
    try {
      const inventory = await Inventory.findById(req.params.id);
      if (!inventory) {
        logger.error(`Inventory with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Inventory with id ${req.params.id} not found` });
      }
      res.status(200).json(inventory);
    } catch (error) {
      res.status(500).json({ message: error.message });
      logger.error(`Error getting inventory ${error.message}`);
    }
  },

  //Create inventory
  createInventory: async (req, res) => {
    try {
      const inventory = new Inventory(req.body);
      await inventory.save();
      res.status(201).json(inventory);
      logger.info(`Inventory created successfully`);
    } catch (error) {
      res.status(400).json({ message: `Error creating inventory` });
      logger.error(`Inventory Create Failed`);
    }
  },

  //Update inventory by email
  updateInventoryById: async (req, res) => {
    try {
      const inventory = await Inventory.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!inventory) {
        logger.error(`Inventory with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Inventory with id ${req.params.id} not found` });
      }
      logger.info(`Inventory with id ${req.params.id} updated successfully`);
      res.status(200).json(inventory);
    } catch (error) {
      logger.error(`Inventory updated failed`);
      res.status(400).json(error.message);
    }
  },

  //Delete inventory by email
  deleteInventoryById: async (req, res) => {
    try {
      const inventory = await Inventory.findByIdAndDelete(req.params.id);
      if (!inventory) {
        logger.error(`Inventory with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Inventory with id ${req.params.id} not found` });
      }
      logger.info(`Inventory deleted successfully`);
      res.status(200).json({ message: `Inventory deleted successfully` });
    } catch (error) {
      logger.error(`Inventory delete unsuccessful`);
      res.status(400).json({ message: `Inventory delete unsuccessful` });
    }
  },
};

export default InventoryController;
