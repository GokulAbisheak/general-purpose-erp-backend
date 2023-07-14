import Customer from "../models/customer.model.js";
import Business from "../models/business.model.js";
import logger from "../utilities/logger.js";

const CustomerController = {
  //Get all customers
  getAllCustomer: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: error });
      logger.error(`Error getting all customers ${error.message}`);
    }
  },

  //Get all customers by business
  getAllCustomerByBusiness: async (req, res) => {
    try {
      const business = await Business.findById(req.params.id);

      if (!business) {
        res
          .status(404)
          .json({ message: `Business with id ${req.params.id} not found` });
        return;
      }

      const customers = await Customer.find({ business: business });
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: error });
      logger.error(`Error getting all customers by business ${error.message}`);
    }
  },

  //Get customer by email
  getCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        logger.error(`Customer with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Customer with id ${req.params.id} not found` });
      }
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: error.message });
      logger.error(`Error getting customer ${error.message}`);
    }
  },

  //Create customer
  createCustomer: async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).json(customer);
      logger.info(`Customer created successfully`);
    } catch (error) {
      res.status(400).json({ message: `Error creating customer` });
      logger.error(`Customer Create Failed`);
    }
  },

  //Update customer by email
  updateCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!customer) {
        logger.error(`Customer with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Customer with id ${req.params.id} not found` });
      }
      logger.info(`Customer with id ${req.params.id} updated successfully`);
      res.status(200).json(customer);
    } catch (error) {
      logger.error(`Customer updated failed`);
      res.status(400).json(error.message);
    }
  },

  //Delete customer by email
  deleteCustomerById: async (req, res) => {
    try {
      const customer = await Customer.findByIdAndDelete(req.params.id);
      if (!customer) {
        logger.error(`Customer with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Customer with id ${req.params.id} not found` });
      }
      logger.info(`Customer deleted successfully`);
      res.status(200).json({ message: `Customer deleted successfully` });
    } catch (error) {
      logger.error(`Customer delete unsuccessful`);
      res.status(400).json({ message: `Customer delete unsuccessful` });
    }
  },
};

export default CustomerController;
