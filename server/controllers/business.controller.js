import Business from "../models/business.model.js"
import logger from "../utilities/logger.js"


const BusinessController = {
    //Get all businesses
    getAllBusiness: async (req, res) => {
        try {
            const businesses = await Business.find();
            res.status(200).json(businesses);
        } catch (error) {
            res.status(500).json({ message: error });
            logger.error(`Error getting all businesses ${error.message}`);
        }

    },

    //Get business by email
    getBusinessByEmail: async (req, res) => {
        try {
            const business = await Business.findOne({ email: req.params.email });
            if (!business) {
                logger.error(`Business with email ${req.params.email} not found`);
                return res.status(404).json({ message: `Business with email ${req.params.email} not found` });
            }
            res.status(200).json(business);
        } catch (error) {
            res.status(500).json({ message: error.message });
            logger.error(`Error getting business ${error.message}`);
        }
    },

    //Create business
    createBusiness: async (req, res) => {
        try {
            const business = new Business(req.body);
            await business.save();
            res.status(201).json(business);
            logger.info(`Business created successfully`);
        } catch (error) {
            res.status(400).json({ message: `Error creating business` });
            logger.error(`Business Create Failed`)
        }

    },

    //Update business by email
    updateBusinessByEmail: async (req, res) => {
        try {
            const business = await Business.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
            if (!business) {
                logger.error(`Business with email ${req.params.email} not found`);
                return res.status(404).json({ message: `Business with email ${req.params.email} not found` });
            }
            logger.info(`Business with email ${req.params.email} updated successfully`);
            res.status(200).json(business);
        } catch (error) {
            logger.error(`Business updated failed`);
            res.status(400).json(error.message);
        }
    },

    //Delete business by email
    deleteBusinessByEmail: async (req, res) => {
        try {
            const business = await Business.findOneAndDelete({ email: req.params.email });
            if (!business) {
                logger.error(`Business with email ${req.params.email} not found`);
                return res.status(404).json({ message: `Business with email ${req.params.email} not found` });
            }
            logger.info(`Business deleted successfully`);
            res.status(200).json({message: `Business deleted successfully`});
        } catch (error) {
            logger.error(`Business delete unsuccessful`);
            res.status(400).json({message: `Business delete unsuccessful`});
        }
    }
}

export default BusinessController;