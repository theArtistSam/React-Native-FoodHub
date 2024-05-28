import {db} from '../services/FirebaseConfig'; // Adjust the path as necessary
import RestaurantModel from '../models/RestaurantModel';

const fetchAllRestaurants = async () => {
  try {
    const snapshot = await db.collection('restaurants').get();
    const restaurants = snapshot.docs.map(doc => {
      const data = doc.data();
      return new RestaurantModel(
        doc.id,
        data['name'],
        data['location'],
        data['rating'],
        data['reviews'],
        data['total_orders'],
        data['food_categories'],
        data['delivery_time'],
        data['logo'],
        data['background_image'],
      );
    });
    return restaurants;
  } catch (error) {
    console.error('Error fetching restaurants: ', error);
    throw error; // Optional: Re-throw the error if you want to handle it elsewhere
  }
};

// Sample Restaurants
// Create a list of restaurants
const restaurantsList = [
  new RestaurantModel(
    null,
    'Restaurant One',
    '123 Main St',
    4.5,
    [{username: 'JohnDoe', date: '2024-05-28', review: 'Great food!'}],
    120,
    ['Italian', 'Pizza'],
    '30-40 mins',
    'logo1.png',
    'background1.png',
  ),
  new RestaurantModel(
    null,
    'Restaurant Two',
    '456 Elm St',
    4.0,
    [{username: 'JaneSmith', date: '2024-05-28', review: 'Good service!'}],
    80,
    ['Mexican', 'Fast Food'],
    '20-30 mins',
    'logo2.png',
    'background2.png',
  ),
  new RestaurantModel(
    null,
    'Restaurant Three',
    '789 Oak St',
    4.7,
    [
      {
        username: 'AliceJohnson',
        date: '2024-05-28',
        review: 'Excellent ambiance!',
      },
    ],
    200,
    ['Chinese', 'Sushi'],
    '25-35 mins',
    'logo3.png',
    'background3.png',
  ),
];

// Function to add a new restaurant
const addRestaurant = async restaurant => {
  try {
    const restaurantData = {
      name: restaurant.name,
      location: restaurant.location,
      rating: restaurant.rating,
      reviews: restaurant.reviews,
      total_orders: restaurant.totalOrders,
      food_categories: restaurant.foodCategories,
      delivery_time: restaurant.deliveryTime,
      logo: restaurant.logo,
      background_image: restaurant.backgroundImage,
    };

    const docRef = await db.collection('restaurants').add(restaurantData);
    console.log('Restaurant added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding restaurant: ', error);
    throw error; // Optional: Re-throw the error if you want to handle it elsewhere
  }
};

export {fetchAllRestaurants, addRestaurant, restaurantsList};
