const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [3, "{PATH} must be at least 3, but got {VALUE}"],
  },
  full_name: String,
  email: {
    type: String,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Enter a valid email"],
  },
  phone_number: Number,
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

userSchema.set("toJSON", {
  transform: (_, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = model("User", userSchema);
