class CartModel {
  constructor(id, items = []) {
    this.id = id;
    this.items = items; // Array of item objects {FoodItem, quantity}
  }
}

export default CartModel;
