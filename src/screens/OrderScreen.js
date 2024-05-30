import {React, useState} from 'react';
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
import ToggleTab from '../components/atoms/ToggleTab';
import OrderItem from '../components/molecules/OrderItem';

const orders = [
  {
    id: '1',
    restaurant: 'Starbucks',
    orderId: '#1231212',
    estimatedTime: '25',
    orderItems: '3 Items',
  },
  {
    id: '2',
    restaurant: 'McDonalds',
    orderId: '#1231213',
    estimatedTime: '15',
    orderItems: '2 Items',
  },
  {
    id: '3',
    restaurant: 'KFC',
    orderId: '#1231214',
    estimatedTime: '30',
    orderItems: '5 Items',
  },
];

const OrderScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Appbar
        title={'Orders'}
        onPress={() => navigation.navigate('HomeScreen')}
      />

      <Spacer vertical={10} />
      <ToggleTab leftText={'Upcoming'} rightText={'History'} />
      <Spacer vertical={10} />

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <OrderItem
            restaurant={item.restaurant}
            orderId={item.orderId}
            estimatedTime={item.estimatedTime}
            orderItems={item.orderItems}
          />
        )}
      />
    </View>
  );
};

export default OrderScreen;
