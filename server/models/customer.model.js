import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  phone: {
    type: String,
  },

  address: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
