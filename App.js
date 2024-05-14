import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Navigation from './src/utils/Navigation';
import HomeScreen from './src/screens/HomeScreen';
import FoodScreen from './src/screens/FoodScreen';
import CartScreen from './src/screens/CartScreen';

const App = () => {
  return (
    <CartScreen />
    // <Navigation />
    // <FoodScreen />
  );
};
export default App;
