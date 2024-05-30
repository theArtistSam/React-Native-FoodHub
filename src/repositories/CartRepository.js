import {db} from '../services/FirebaseConfig'; // Adjust the path as necessary
import CartItemModel from '../models/CartModel';

const fetchAllCartItems = async () => {
  try {
    const snapshot = await db
      .collection('users')
      .doc('3UIIsWPpc5XqV7U8zoEY')
      .collection('cart')
      .get();

    const cartItems = snapshot.docs.map(doc => {
      const data = doc.data();
      return new CartItemModel(doc.id, data['food_item_id'], data['quantity']);
    });
    return cartItems;
  } catch (error) {
    console.error('Error fetching cart items: ', error);
    throw error; // Optional: Re-throw the error if you want to handle it elsewhere
  }
};

// Function to add a new restaurant
const addCartItem = async cartItem => {
  try {
    const cartItemData = {
      id: cartItem.id,
      food_item_id: cartItem.foodItemId,
      quantity: cartItem.quantity,
    };
    const docRef = await db
      .collection('users')
      .doc('3UIIsWPpc5XqV7U8zoEY')
      .collection('cart')
      .add(cartItemData);

    await docRef.update({id: docRef.id});

    console.log('Cart item added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding cart item: ', error);
    throw error; // Optional: Re-throw the error if you want to handle it elsewhere
  }
};

const removeCartItem = async id => {
  try {
    const docRef = await db
      .collection('users')
      .doc('3UIIsWPpc5XqV7U8zoEY')
      .collection('cart')
      .doc(id)
      .delete();
  } catch (error) {
    console.log(error);
  }
};

const clearCart = async () => {
  try {
    const cartCollection = db
      .collection('users')
      .doc('3UIIsWPpc5XqV7U8zoEY')
      .collection('cart');
    const snapshot = await cartCollection.get();

    const batch = db.batch();
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log('Cart cleared successfully.');
  } catch (error) {
    console.log('Error clearing cart:', error);
  }
};

export {fetchAllCartItems, addCartItem, removeCartItem, clearCart};
