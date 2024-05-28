class RestaurantModel {
  constructor(
    id,
    name,
    location,
    rating,
    reviews = [],
    totalOrders,
    foodCategories,
    deliveryTime,
    logo,
    backgroundImage,
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.rating = rating;
    this.reviews = reviews; // Array of review objects {username, date, review}
    this.totalOrders = totalOrders;
    this.foodCategories = foodCategories; // Array of strings
    this.deliveryTime = deliveryTime;
    this.logo = logo;
    this.backgroundImage = backgroundImage;
  }
}
export default RestaurantModel;
