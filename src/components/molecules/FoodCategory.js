import React from 'react';
import StyledText from '../../components/atoms/StyledText';
import {AppColors} from '../../styles/AppColors';
import Spacer from '../../components/atoms/Spacer';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const FoodCategory = ({isSelected = false, onPress, text}) => {
  return (
    <TouchableOpacity
      style={[
        styles.outerView,
        {backgroundColor: isSelected ? AppColors.primaryColor : 'white'},
      ]}
      onPress={onPress}>
      <View style={styles.innerView}>
        <Image
          style={{borderRadius: 100}}
          source={require('../../../assets/images/person.png')}></Image>
      </View>
      <Spacer vertical={5} />
      <StyledText
        text={text}
        color={isSelected ? 'white' : AppColors.secondaryTextColor}
        fontSize={12}></StyledText>
      <Spacer vertical={5} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  outerView: {
    padding: 5,
    borderRadius: 100,
    alignItems: 'center',
    shadowOffset: {width: 5, height: 10},
    shadowColor: 'rgba(0, 0, 0, .3)', // Shadow color with 30% opacity
    shadowRadius: 20,
    elevation: 5,
    marginRight: 10, // Elevation for Android shadow
  },
  innerView: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 100,
  },
});

export default FoodCategory;
