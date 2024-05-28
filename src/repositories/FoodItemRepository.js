import {db} from '../services/FirebaseConfig'; // Adjust the path as necessary
import FoodItemModel from '../models/FoodItemModel';

const fetchAllFoodItems = async () => {
  try {
    const snapshot = await db.collection('fooditems').get();
    const foodItems = snapshot.docs.map(doc => {
      const data = doc.data();
      return new FoodItemModel(
        doc.id,
        data['name'],
        data['tagline'],
        data['description'],
        data['background_image'],
        data['rating'],
        data['total_orders'],
        data['price'],
        data['add_ons'],
        data['reviews'],
      );
    });
    return foodItems;
  } catch (error) {
    console.error('Error fetching food items: ', error);
    throw error; // Optional: Re-throw the error if you want to handle it elsewhere
  }
};

const foodItemsList = [
  new FoodItemModel(
    1,
    'Spaghetti Carbonara',
    'Classic Italian Pasta',
    'Delicious spaghetti carbonara with creamy sauce, pancetta, and Parmesan cheese.',
    'https://images.unsplash.com/photo-1604908812840-4f20c1299648', // Unsplash image URL
    4.8,
    250,
    15.99,
    [
      {
        image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36',
        name: 'Extra Parmesan',
        price: 2.0,
        isSelected: false,
      },
    ],
    [
      {
        username: 'JohnDoe',
        date: '2024-05-28',
        review: "Best carbonara I've ever had!",
      },
    ],
  ),
  new FoodItemModel(
    2,
    'Margherita Pizza',
    'Classic Neapolitan Pizza',
    'A traditional margherita pizza with fresh mozzarella, basil, and tomatoes.',
    'https://images.unsplash.com/photo-1555992336-03a23c3a7b22', // Unsplash image URL
    4.6,
    300,
    12.99,
    [
      {
        image: 'https://images.unsplash.com/photo-1594007652202-3784b34b2429',
        name: 'Extra Basil',
        price: 1.5,
        isSelected: false,
      },
    ],
    [
      {
        username: 'JaneSmith',
        date: '2024-05-28',
        review: 'So fresh and delicious!',
      },
    ],
  ),
  new FoodItemModel(
    3,
    'Sushi Platter',
    'Assorted Sushi Rolls',
    'A variety of sushi rolls including salmon, tuna, and avocado rolls.',
    'https://images.unsplash.com/photo-1603103850923-b03c54c648d3', // Unsplash image URL
    4.9,
    150,
    25.99,
    [
      {
        image: 'https://images.unsplash.com/photo-1576502200568-427292590d1b',
        name: 'Extra Wasabi',
        price: 1.0,
        isSelected: false,
      },
    ],
    [
      {
        username: 'AliceJohnson',
        date: '2024-05-28',
        review: 'Perfect sushi, will order again!',
      },
    ],
  ),
  new FoodItemModel(
    4,
    'Chicken Tacos',
    'Mexican Street Tacos',
    'Flavorful chicken tacos with cilantro, onions, and a squeeze of lime.',
    'https://images.unsplash.com/photo-1600376166876-2cd26e84372b', // Unsplash image URL
    4.7,
    180,
    10.99,
    [
      {
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        name: 'Extra Lime',
        price: 0.5,
        isSelected: false,
      },
    ],
    [
      {
        username: 'BobBrown',
        date: '2024-05-28',
        review: 'Authentic and tasty!',
      },
    ],
  ),
  new FoodItemModel(
    5,
    'Cheeseburger',
    'Classic American Burger',
    'Juicy cheeseburger with lettuce, tomato, and pickles on a toasted bun.',
    'https://images.unsplash.com/photo-1550547660-d9450f859349', // Unsplash image URL
    4.5,
    220,
    11.99,
    [
      {
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        name: 'Extra Cheese',
        price: 1.5,
        isSelected: false,
      },
    ],
    [
      {
        username: 'CharlieGreen',
        date: '2024-05-28',
        review: 'A classic done right!',
      },
    ],
  ),
];

// Function to add a new food item
const addFoodItem = async foodItem => {
  try {
    const foodItemData = {
      name: foodItem.name,
      tagline: foodItem.tagline,
      description: foodItem.description,
      background_image: foodItem.backgroundImage,
      rating: foodItem.rating,
      total_orders: foodItem.totalOrders,
      price: foodItem.price,
      add_ons: foodItem.addOns,
      reviews: foodItem.reviews,
    };

    const docRef = await db.collection('fooditems').add(foodItemData);
    console.log('Food item added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding food item: ', error);
    throw error; // Optional: Re-throw the error if you want to handle it elsewhere
  }
};
export {fetchAllFoodItems, foodItemsList, addFoodItem};
