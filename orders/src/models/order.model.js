const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  name: String,
  price: Number,
});

orderSchema.set("toJSON", {
  transform: (_, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = model("Order", orderSchema);
