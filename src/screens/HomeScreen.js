import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from '../styles/core/RootStyle';
import StyledIconButton from '../components/atoms/StyledIconButton';
import StyledText from '../components/atoms/StyledText';
import {AppColors} from '../styles/AppColors';
import Spacer from '../components/atoms/Spacer';
import {Heart, Customize, Search, MenuIcon} from '../../assets/icons';
import SearchTextInput from '../components/atoms/SearchTextInput';
import FoodCategory from '../components/molecules/FoodCategory';
import RestaurantTile from '../components/molecules/RestaurantTIle';
import FoodTile from '../components/molecules/FoodTile';
import {
  fetchAllRestaurants,
  addRestaurant,
  restaurantsList,
} from '../repositories/RestaurantRepository';
import {
  addFoodItem,
  fetchAllFoodItems,
  foodItemsList,
} from '../repositories/FoodItemRepository';

const foodCategories = [
  {id: 1, name: 'Burger'},
  {id: 2, name: 'Donat'},
  {id: 3, name: 'Pizza'},
  {id: 4, name: 'Maxican'},
  {id: 5, name: 'Asian'},
  {id: 6, name: 'Chinese'},
  {id: 7, name: 'American'}, // Add more categories as needed
];

const restaurantsData = [
  {
    id: 1,
    restaurantName: "McDonald's",
    rating: 4.5,
    deliveryTime: '10-15 mins',
    foodTags: ['BURGER', 'CHICKEN', 'FAST FOOD'],
  },
  {
    id: 2,
    restaurantName: "McDonald's",
    rating: 4.5,
    deliveryTime: '10-15 mins',
    foodTags: ['BURGER', 'CHICKEN', 'FAST FOOD'],
  },
  {
    id: 3,
    restaurantName: "McDonald's",
    rating: 4.5,
    deliveryTime: '10-15 mins',
    foodTags: ['BURGER', 'CHICKEN', 'FAST FOOD'],
  },
  // Add more items as needed
];

const foodsData = [
  {id: 1, foodName: 'Salmon Salad', foodType: 'Baked salmon fish', price: 5.5},
  {id: 2, foodName: 'Salmon Salad', foodType: 'Baked salmon fish', price: 5.5},
  {id: 3, foodName: 'Salmon Salad', foodType: 'Baked salmon fish', price: 5.5},
  {id: 4, foodName: 'Salmon Salad', foodType: 'Baked salmon fish', price: 5.5},
  // Add more items as needed
];

const HomeScreen = ({navigation}) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [foodItems, setfoodItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantsData = await fetchAllRestaurants();
        const foodItemsData = await fetchAllFoodItems();
        setfoodItems(foodItemsData);
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.root}>
        {/* App bar */}
        <View style={{flexDirection: 'row'}}>
          <StyledIconButton
            onPress={() => {
              // Example usage
              // Shit is working fine!
              // let's use useEffect instead
              // for (let restaurant of restaurantsList) {
              //   addRestaurant(restaurant);
              // }
              // fetchAllFoodItems()
              //   .then(foodItems => {
              //     console.log(foodItems);
              //   })
              //   .catch(error => {
              //     console.log(error);
              //   });
              // for (let foodItem of foodItemsList) {
              //   addFoodItem(foodItem);
              // }
            }}
            Icon={MenuIcon}></StyledIconButton>
          <View style={{flex: 1, alignItems: 'center'}}>
            <StyledText
              text={'Deliver to'}
              color={AppColors.secondaryTextColor}></StyledText>
            <StyledText
              text={'4102 Pretty View Lane'}
              color={AppColors.primaryColor}></StyledText>
          </View>
          <Image
            style={{borderRadius: 12}}
            source={require('../../assets/images/person.png')}></Image>
        </View>

        <Spacer vertical={10} />
        {/* Heading 1 */}
        <StyledText
          text={'What would you like to order'}
          color={AppColors.primaryTextColor}
          fontSize={30}
          fontWeight={'Bold'}></StyledText>

        <Spacer vertical={10} />

        <View style={{flexDirection: 'row'}}>
          <SearchTextInput Icon={Search}></SearchTextInput>
          <Spacer horizontal={10} />
          <StyledIconButton
            iconColor={AppColors.primaryColor}
            Icon={Customize}
            height={20}
            width={20}></StyledIconButton>
        </View>

        <Spacer vertical={10} />

        <FlatList
          data={foodCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item, index}) => (
            <FoodCategory
              isSelected={categoryIndex == index}
              text={item.name} // You can set isSelected based on your logic
              onPress={() => {
                setCategoryIndex(index);
              }} // Handle onPress event
              category={item} // Pass the category data to FoodCategory component
            />
          )}
        />
        <Spacer vertical={10} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <StyledText
            style={{flex: 1}}
            text={'Featured Restaurants'}
            fontWeight="SemiBold"
            fontSize={18}></StyledText>
          <TouchableOpacity onPress={() => {}}>
            <StyledText
              text={'View All'}
              color={AppColors.primaryColor}
              fontWeight="Regular"
              fontSize={14}></StyledText>
          </TouchableOpacity>
        </View>

        <Spacer vertical={10} />

        <FlatList
          data={restaurants}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <RestaurantTile
              totalOrders={
                item.totalOrders >= 1000
                  ? `${(item.totalOrders / 1000).toFixed(2)}K`
                  : item.totalOrders
              }
              backgroundImage={item.backgroundImage}
              restaurantName={item.name}
              rating={item.rating}
              deliveryTime={item.deliveryTime}
              foodTags={item.foodCategories} // Corrected from item.foodTags to item.foodCategories
            />
          )}
        />

        <Spacer vertical={10} />

        <StyledText
          style={{flex: 1}}
          text={'Popular Items'}
          fontWeight="SemiBold"
          fontSize={18}></StyledText>

        <Spacer vertical={10} />

        <FlatList
          data={foodItems}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <FoodTile
              backgroundImage={item.backgroundImage}
              foodName={item.name}
              foodType={item.tagline}
              price={item.price}
              onPress={() => navigation.push('FoodScreen', {foodId: item.id})}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
