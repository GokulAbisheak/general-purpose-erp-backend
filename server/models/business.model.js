import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Business = mongoose.model("Business", BusinessSchema);

export default Business;
