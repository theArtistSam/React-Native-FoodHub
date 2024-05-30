import React, {useState} from 'react';
import StyledText from '../../components/atoms/StyledText';
import {AppColors} from '../../styles/AppColors';
import Spacer from '../../components/atoms/Spacer';
import CounterButton from '../../components/atoms/CounterButton';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../../assets/icons/heart.svg';
import {Cross, Minus, Plus} from '../../../assets/icons';
const CartItem = ({
  id,
  foodName,
  foodCategory,
  foodPrice,
  backgroundImage,
  quantity,
  callbackFn,
}) => {
  return (
    <View style={styles.outerView}>
      <Image style={styles.image} source={{uri: backgroundImage}}></Image>

      <View style={styles.innerView}>
        <View style={{flexDirection: 'row'}}>
          <StyledText
            text={foodName}
            fontSize={18}
            fontWeight="SemiBold"></StyledText>
          <Spacer style={{flex: 1}}></Spacer>
          <TouchableOpacity
            onPress={() => {
              callbackFn(id);
            }}>
            <Cross width={24} height={24} fill={AppColors.primaryColor}></Cross>
          </TouchableOpacity>
        </View>
        <Spacer vertical={2}></Spacer>
        <StyledText text={foodCategory}></StyledText>
        <Spacer style={{flex: 1}}></Spacer>
        <View style={styles.counterView}>
          <StyledText
            text={`$${foodPrice}`}
            fontSize={20}
            color={AppColors.primaryColor}
            fontWeight="Bold"></StyledText>
          <Spacer style={{flex: 1}}></Spacer>
          <StyledText
            text={`Qty: ${Number(quantity).toString()}`}
            fontWeight="Bold"
            color={AppColors.primaryColor}
            fontSize={18}></StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    borderRadius: 15,
    width: 90,
    height: 90,
  },
  innerView: {
    marginLeft: 10,
    flex: 1,
  },
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
export default CartItem;
