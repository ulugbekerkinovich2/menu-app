const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  food: {
    type: Schema.Types.ObjectId,
    ref: "Food",
  },
});
module.exports = model("Restaurant", restaurantSchema)