const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  emailId: { type: String },
  password: { type: String },
  Age: { type: Number },
  Gender: { type: String },
});

const User = mongoose.model("User", schema);
module.exports ={User}
