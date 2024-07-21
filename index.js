const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const startServer = async () => {
  const app = express();
  const connectDB = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://ulugbek9015t:op41rFrDcaWUafty@cluster0.ksmmebh.mongodb.net/graphqldb"
      );
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1);
    }
  };
  connectDB();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
