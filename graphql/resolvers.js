const Restaurant = require("../models/Restaurant");
const Food = require("../models/Food");

const resolvers = {
  Query: {
    getRestaurants: async () => await Restaurant.find(),
    getRestaurant: async (_, { id }) => await Restaurant.findById(id),
    getFoods: async () => await Food.find(),
    getFood: async (_, { id }) => await Food.findById(id),
  },
  Mutation: {
    createRestaurant: async (_, { name, address }) => {
      const restaurant = new Restaurant({ name, address });
      await restaurant.save();
      return restaurant;
    },
    updateRestaurant: async (_, { id, name, address }) => {
      const restaurant = await Restaurant.findById(id);
      if (name) restaurant.name = name;
      if (address) restaurant.address = address;
      await restaurant.save();
      return restaurant;
    },
    deleteRestaurant: async (_, { id }) => {
      await Restaurant.findByIdAndDelete(id);
      return "Restaurant deleted";
    },
    createFood: async (_, { name, description, price, restaurantId }) => {
      const restaurant = await Restaurant.findById(restaurantId);
      const food = new Food({ name, description, price, restaurant });
      await food.save();
      restaurant.foods.push(food);
      await restaurant.save();
      return food;
    },
    updateFood: async (_, { id, name, description, price }) => {
      const food = await Food.findById(id);
      if (name) food.name = name;
      if (description) food.description = description;
      if (price) food.price = price;
      await food.save();
      return food;
    },
    deleteFood: async (_, { id }) => {
      await Food.findByIdAndDelete(id);
      return "Food deleted";
    },
  },
  Restaurant: {
    foods: async (parent) => await Food.find({ restaurant: parent.id }),
  },
  Food: {
    restaurant: async (parent) => await Restaurant.findById(parent.restaurant),
  },
};

module.exports = resolvers;
