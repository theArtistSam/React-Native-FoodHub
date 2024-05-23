import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StyledText from '../atoms/StyledText'; // Adjust the path based on your project structure
import Spacer from '../atoms/Spacer'; // Adjust the path based on your project structure
import TextButton from '../atoms/TextButton'; // Adjust the path based on your project structure
import {AppColors} from '../../styles/AppColors'; // Adjust the path based on your project structure

const OrderItem = ({orderItems, estimatedTime, restaurant, orderId}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/food.png')}
        />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <Spacer style={styles.flex1} />
            <StyledText
              text={orderId}
              fontSize={18}
              color={AppColors.primaryColor}
            />
          </View>
          <StyledText text={orderItems} color={AppColors.secondaryTextColor} />
          <StyledText text={restaurant} fontWeight="Bold" fontSize={20} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <StyledText text={'Estimated Time'} />
          <View style={styles.timeContainer}>
            <StyledText text={estimatedTime} fontSize={40} fontWeight="Bold" />
            <Spacer horizontal={5} />
            <StyledText text={'min'} />
          </View>
        </View>
        <Spacer style={styles.flex1} />
        <View style={styles.alignEnd}>
          <StyledText text={'Now'} color={AppColors.secondaryTextColor} />
          <StyledText text={'Your food is on the way'} fontWeight="Bold" />
        </View>
      </View>
      <View style={styles.row}>
        <TextButton text={'Cancel'} isFilled={false} />
        <TextButton text={'Track Order'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowOffset: {width: 5, height: 10},
    shadowColor: 'rgba(0, 0, 0, .3)', // Shadow color with 30% opacity
    shadowRadius: 20,
    marginVertical: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'center',
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  infoContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
});

export default OrderItem;
