import React, {useState} from 'react';
import StyledText from '../../components/atoms/StyledText';
import {AppColors} from '../../styles/AppColors';
import Spacer from '../../components/atoms/Spacer';
import CounterButton from '../../components/atoms/CounterButton';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Heart from '../../../assets/icons/heart.svg';
const CartItem = ({foodName, foodCategory, foodPrice}) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.outerView}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/food.png')}></Image>

      <View style={styles.innerView}>
        <View style={{flexDirection: 'row'}}>
          <StyledText
            text={foodName}
            fontSize={18}
            fontWeight="SemiBold"></StyledText>
          <Spacer style={{flex: 1}}></Spacer>
          <Heart colo={AppColors.primaryColor}></Heart>
        </View>
        <Spacer vertical={2}></Spacer>
        <StyledText text={foodCategory}></StyledText>
        <Spacer style={{flex: 1}}></Spacer>
        <View style={styles.counterView}>
          <StyledText
            text={`$${foodPrice.toString()}`}
            fontSize={20}
            color={AppColors.primaryColor}
            fontWeight="Bold"></StyledText>
          <Spacer style={{flex: 1}}></Spacer>
          <CounterButton
            onPress={() => {
              if (count > 0) setCount(count - 1);
            }}
            Icon={Heart}
            isBordered={true}></CounterButton>
          <Spacer horizontal={5}></Spacer>
          <StyledText text={count.toString()}></StyledText>
          <Spacer horizontal={5}></Spacer>
          <CounterButton
            onPress={() => {
              setCount(count + 1);
            }}
            Icon={Heart}></CounterButton>
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
