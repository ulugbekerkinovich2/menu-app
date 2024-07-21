const { Schema, model } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  }
});

module.exports = model("Food", foodSchema);
