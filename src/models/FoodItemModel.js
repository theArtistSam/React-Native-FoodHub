class FoodItemModel {
  constructor(
    id,
    name,
    tagline,
    description,
    backgroundImage,
    rating,
    totalOrders,
    price,
    addOns = [],
    reviews = [],
  ) {
    this.id = id;
    this.name = name;
    this.tagline = tagline;
    this.description = description;
    this.backgroundImage = backgroundImage;
    this.rating = rating;
    this.totalOrders = totalOrders;
    this.price = price;
    this.addOns = addOns; // Array of addOn objects {image, name, price, isSelected}
    this.reviews = reviews; // Array of review objects {username, date, review}
  }
}

export default FoodItemModel;
