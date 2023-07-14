import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },

  employeeId: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  employeeType: {
    type: String,
  },

  nic: {
    type: String,
  },

  phoneNumber: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
