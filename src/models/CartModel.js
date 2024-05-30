class CartItemModel {
  constructor(id, foodItemId, quantity) {
    this.id = id;
    this.foodItemId = foodItemId; // Array of item objects {FoodItem, quantity}
    this.quantity = quantity;
  }
}

export default CartItemModel;
