import mongoose from "mongoose";

const FinanceSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },

  transactionId: {
    type: String,
    required: true,
    unique: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    enum: ["incoming", "outgoing"],
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Finance = mongoose.model("Finance", FinanceSchema);

export default Finance;
