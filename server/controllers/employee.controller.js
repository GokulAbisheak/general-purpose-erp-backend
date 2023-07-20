import Employee from "../models/employee.model.js";
import Business from "../models/business.model.js";
import logger from "../utilities/logger.js";

const EmployeeController = {
  //Get all employees
  getAllEmployee: async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error });
      logger.error(`Error getting all employees ${error.message}`);
    }
  },

    //Get all employees by business
    getAllEmployeeByBusiness: async (req, res) => {
        try {
          const business = await Business.findById(req.params.id);
    
          if (!business) {
            res
              .status(404)
              .json({ message: `Business with id ${req.params.id} not found` });
            return;
          }
    
          const employees = await Employee.find({ business: req.params.id });
          res.status(200).json(employees);
        } catch (error) {
          res.status(500).json({ message: error });
          logger.error(`Error getting all employees by business ${error.message}`);
        }
      },

  //Get employee by email
  getEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        logger.error(`Employee with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Employee with id ${req.params.id} not found` });
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
      logger.error(`Error getting employee ${error.message}`);
    }
  },

  //Create employee
  createEmployee: async (req, res) => {
    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);
      logger.info(`Employee created successfully`);
    } catch (error) {
      res.status(400).json({ message: `Error creating employee` });
      logger.error(`Employee Create Failed`);
    }
  },

  //Update employee by email
  updateEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!employee) {
        logger.error(`Employee with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Employee with id ${req.params.id} not found` });
      }
      logger.info(`Employee with id ${req.params.id} updated successfully`);
      res.status(200).json(employee);
    } catch (error) {
      logger.error(`Employee updated failed`);
      res.status(400).json(error.message);
    }
  },

  //Delete employee by email
  deleteEmployeeById: async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (!employee) {
        logger.error(`Employee with id ${req.params.id} not found`);
        return res
          .status(404)
          .json({ message: `Employee with id ${req.params.id} not found` });
      }
      logger.info(`Employee deleted successfully`);
      res.status(200).json({ message: `Employee deleted successfully` });
    } catch (error) {
      logger.error(`Employee delete unsuccessful`);
      res.status(400).json({ message: `Employee delete unsuccessful` });
    }
  },
};

export default EmployeeController;
