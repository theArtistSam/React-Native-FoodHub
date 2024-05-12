import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../styles/AppColors';

const RadioButton = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsSelected(!isSelected);
      }}
      style={[
        styles.outerView,
        {
          borderColor: isSelected
            ? AppColors.primaryColor
            : AppColors.borderColor,
        },
      ]}>
      <View
        style={[
          styles.innerView,
          {backgroundColor: isSelected ? AppColors.primaryColor : 'white'},
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerView: {
    borderRadius: 30,
    borderWidth: 2,
    padding: 5,
  },
  innerView: {
    width: 15,
    height: 15,
    borderRadius: 30,
  },
});
export default RadioButton;
