import React from 'react';
import {Image, View, FlatList} from 'react-native';
import styles from '../styles/core/RootStyle';
import Heart from '../../assets/icons/heart.svg';
import StyledText from '../components/atoms/StyledText';
import Appbar from '../components/atoms/Appbar';
import Spacer from '../components/atoms/Spacer';
import {AppColors} from '../styles/AppColors';
import CounterButton from '../components/atoms/CounterButton';
import CartItem from '../components/molecules/CartItem';
import TextButton from '../components/atoms/TextButton';

const CartScreen = ({navigation}) => {
  const cartItems = [
    {
      id: 1,
      foodName: 'Red n Hot Pizza',
      foodCategory: 'Spicy chicken, beef',
      foodPrice: 15.3,
    },
    {
      id: 2,
      foodName: 'Cheeseburger',
      foodCategory: 'Beef, cheese',
      foodPrice: 10.5,
    },
    {
      id: 3,
      foodName: 'Vegetarian Pasta',
      foodCategory: 'Mixed vegetables, pasta',
      foodPrice: 12.0,
    },
  ];
  return (
    <View style={styles.root}>
      {/* Appbar */}
      <Appbar title={'Cart'} onPress={() => navigation.goBack()}></Appbar>

      <Spacer vertical={10}></Spacer>
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CartItem
              foodName={item.foodName}
              foodCategory={item.foodCategory}
              foodPrice={item.foodPrice}
            />
          )}
        />
      </View>
      <Spacer vertical={10}></Spacer>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <StyledText text={'Subtotal'} style={{flex: 1}} />
        <StyledText text={'$27.82'} fontSize={20} fontWeight="Bold" />
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
        <StyledText text={'$27.82'} fontSize={20} fontWeight="Bold" />
      </View>
      <Spacer style={{flex: 1}} />
      <View style={{height: 50}}>
        <TextButton
          text={'CHECKOUT'}
          onPress={() => {
            navigation.push('OrderScreen');
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;
