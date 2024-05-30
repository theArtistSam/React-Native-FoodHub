import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StyledText from '../atoms/StyledText'; // Assuming you have a StyledText component
import Heart from '../../../assets/icons/heart.svg'; // Assuming you have a Heart component
import Spacer from '../atoms/Spacer'; // Assuming you have a Spacer component
import {AppColors} from '../../styles/AppColors'; // Assuming you have a constants file with AppColors defined
import RadioButton from '../atoms/RadioButton';

const AddOnTile = ({addOn, price, isSelected = false, image}) => {
  return (
    <View style={styles.outerView}>
      <Image style={styles.image} source={{uri: image}}></Image>
      <Spacer horizontal={5} />
      <StyledText text={addOn} fontSize={16} fontWeight="SemiBold" />
      <Spacer style={{flex: 1}} />
      <StyledText
        text={`+$${price.toString()}`}
        fontSize={16}
        fontWeight="SemiBold"
      />
      <Spacer horizontal={10} />
      <RadioButton isSelected={isSelected} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
export default AddOnTile;
