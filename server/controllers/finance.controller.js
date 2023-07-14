import Finance from "../models/finance.model.js";
import Business from "../models/business.model.js";
import mongoose from "mongoose";
import logger from "../utilities/logger.js";

const FinanceController = {
  //Get all finances
  getAllFinance: async (req, res) => {
    try {
      const finances = await Finance.find();
      res.status(200).json(finances);
    } catch (error) {
      res.status(500).json({ message: error });
      logger.error(`Error getting all finances ${error.message}`);
    }
  },

    //Get all finances by business
    getAllFinanceByBusiness: async (req, res) => {
        try {
          const business = await Business.findById(req.params.id);
    
          if (!business) {
            res
              .status(404)
              .json({ message: `Business with id ${req.params.id} not found` });
            return;
          }
    
          const finances = await Finance.find({ business: business });
          res.status(200).json(finances);
        } catch (error) {
          res.status(500).json({ message: error });
          logger.error(`Error getting all finances by business ${error.message}`);
        }
      },

  //Get finance by email
  getFinanceById: async (req, res) => {
    try {
      const finance = await Finance.findById(req.params.id);
      if (!finance) {
        logger.error(`Finance with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Finance with id ${req.params.id} not found` });
      }
      res.status(200).json(finance);
    } catch (error) {
      res.status(500).json({ message: error.message });
      logger.error(`Error getting finance ${error.message}`);
    }
  },

  //Create finance
  createFinance: async (req, res) => {
    try {
      const finance = new Finance(req.body);
      await finance.save();
      res.status(201).json(finance);
      logger.info(`Finance created successfully`);
    } catch (error) {
      res.status(400).json({ message: `Error creating finance` });
      logger.error(`Finance Create Failed`);
    }
  },

  //Update finance by email
  updateFinanceById: async (req, res) => {
    try {
      const finance = await Finance.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!finance) {
        logger.error(`Finance with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Finance with id ${req.params.id} not found` });
      }
      logger.info(`Finance with id ${req.params.id} updated successfully`);
      res.status(200).json(finance);
    } catch (error) {
      logger.error(`Finance updated failed`);
      res.status(400).json(error.message);
    }
  },

  //Delete finance by email
  deleteFinanceById: async (req, res) => {
    try {
      const finance = await Finance.findByIdAndDelete(req.params.id);
      if (!finance) {
        logger.error(`Finance with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Finance with id ${req.params.id} not found` });
      }
      logger.info(`Finance deleted successfully`);
      res.status(200).json({ message: `Finance deleted successfully` });
    } catch (error) {
      logger.error(`Finance delete unsuccessful`);
      res.status(400).json({ message: `Finance delete unsuccessful` });
    }
  },
};

export default FinanceController;
