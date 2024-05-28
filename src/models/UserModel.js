class UserModel {
  constructor(
    id,
    firstName,
    lastName,
    email,
    phone,
    favoriteRestaurants = [],
    favoriteFoodItems = [],
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.favoriteRestaurants = favoriteRestaurants; // Array of Restaurant IDs
    this.favoriteFoodItems = favoriteFoodItems; // Array of FoodItem IDs
  }
}

export default UserModel;
