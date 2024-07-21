mutation {
  createRestaurant(name: "Restaurant A", address: "123 Main St") {
    id
    name
    address
  }
}
{
  getRestaurants {
    id
    name
    address
  }
}
{
  getRestaurant(id: "RESTAURANT_ID") {
    id
    name
    address
  }
}
mutation {
  updateRestaurant(id: "RESTAURANT_ID", name: "Updated Name", address: "456 Elm St") {
    id
    name
    address
  }
}

mutation {
  deleteRestaurant(id: "RESTAURANT_ID")
}

mutation {
  createFood(name: "Pizza", description: "Delicious cheese pizza", price: 9.99, restaurantId: "RESTAURANT_ID") {
    id
    name
    description
    price
    restaurant {
      id
      name
    }
  }
}
{
  getFoods {
    id
    name
    description
    price
    restaurant {
      id
      name
    }
  }
}
{
  getFood(id: "FOOD_ID") {
    id
    name
    description
    price
    restaurant {
      id
      name
    }
  }
}
mutation {
  updateFood(id: "FOOD_ID", name: "Updated Pizza", description: "Delicious updated cheese pizza", price: 10.99) {
    id
    name
    description
    price
    restaurant {
      id
      name
    }
  }
}
mutation {
  deleteFood(id: "FOOD_ID")
}
