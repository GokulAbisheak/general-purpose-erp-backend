import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    default: 0,
  },

  category: {
    type: String,
  },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

export default Inventory;
