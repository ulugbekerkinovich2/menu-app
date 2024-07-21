const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Restaurant {
    id: ID!
    name: String!
    address: String!
    foods: [Food]
  }

  type Food {
    id: ID!
    name: String!
    description: String!
    price: Float!
    restaurant: Restaurant!
  }

  type Query {
    getRestaurants: [Restaurant]
    getRestaurant(id: ID!): Restaurant
    getFoods: [Food]
    getFood(id: ID!): Food
  }

  type Mutation {
    createRestaurant(name: String!, address: String!): Restaurant
    updateRestaurant(id: ID!, name: String, address: String): Restaurant
    deleteRestaurant(id: ID!): String

    createFood(
      name: String!
      description: String!
      price: Float!
      restaurantId: ID!
    ): Food
    updateFood(id: ID!, name: String, description: String, price: Float): Food
    deleteFood(id: ID!): String
  }
`;

module.exports = typeDefs;
