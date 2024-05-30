import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styles from '../styles/core/RootStyle';
import StyledText from '../components/atoms/StyledText';
import Appbar from '../components/atoms/Appbar';
import Spacer from '../components/atoms/Spacer';
import CartItem from '../components/molecules/CartItem';
import TextButton from '../components/atoms/TextButton';
import {
  clearCart,
  fetchAllCartItems,
  removeCartItem,
} from '../repositories/CartRepository';
import {fetchAllFoodItems} from '../repositories/FoodItemRepository';

const CartScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([]);
  const [removeSignal, setRemoveSignal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartItemsData = await fetchAllCartItems();
        const foodItemsData = await fetchAllFoodItems();
        console.log(cartItemsData);

        // Combine cart items with corresponding food items
        const combinedCartItems = cartItemsData.map(cartItem => {
          const foodItem = foodItemsData.find(
            item => item.id === cartItem.foodItemId,
          );

          if (foodItem) {
            return {
              ...cartItem,
              foodItem: foodItem,
            };
          }
        });
        // console.log(combinedCartItems);
        setCartItems(combinedCartItems);
        if (combinedCartItems.length === 0) {
          navigation.goBack();
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, [removeSignal]);

  const removeItem = async id => {
    try {
      console.log('Delete nhi kero ga, Teheelka delete kero ga...');
      await removeCartItem(id);
      setRemoveSignal(!removeSignal);
      console.log('Yeh ly beety...');
    } catch (error) {
      console.log(error);
    }
  };
  const calculateSubtotal = () => {
    let sum = 0;
    for (let cartItem of cartItems) {
      sum += cartItem.foodItem.price * cartItem.quantity;
    }
    return sum;
  };
  return (
    <View style={styles.root}>
      {/* Appbar */}
      <Appbar title={'Cart'} onPress={() => navigation.goBack()}></Appbar>

      <Spacer vertical={10}></Spacer>
      <View style={{flex: 1}}>
        <FlatList
          data={cartItems}
          keyExtractor={item => {
            console.log(item);
            console.log(item.quantity);
          }}
          renderItem={({item}) => (
            <CartItem
              id={item.id}
              backgroundImage={item.foodItem.backgroundImage}
              quantity={item.quantity}
              foodName={item.foodItem.name}
              foodCategory={item.foodItem.tagline}
              foodPrice={item.foodItem.price}
              callbackFn={removeItem}
            />
          )}
        />
      </View>
      <Spacer vertical={10}></Spacer>
      <View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <StyledText text={'Subtotal'} style={{flex: 1}} />
          <StyledText
            text={calculateSubtotal().toFixed(2)}
            fontSize={20}
            fontWeight="Bold"
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <StyledText text={'Tax'} style={{flex: 1}} />
          <StyledText text={'$5.82'} fontSize={20} fontWeight="Bold" />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <StyledText text={'Delivery'} style={{flex: 1}} />
          <StyledText text={'$17.82'} fontSize={20} fontWeight="Bold" />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <StyledText text={'Total'} style={{flex: 1}} />
          <StyledText
            text={(calculateSubtotal() + 5.82 + 17.82).toFixed(2)}
            fontSize={20}
            fontWeight="Bold"
          />
        </View>
        <Spacer style={{flex: 1}} />
        <View style={{height: 50}}>
          <TextButton
            text={'CHECKOUT'}
            onPress={async () => {
              try {
                await clearCart();
              } catch (error) {
                console.log('Dafa ho!!!');
              }
              navigation.push('OrderScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
