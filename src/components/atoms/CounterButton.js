import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../styles/AppColors';

const CounterButton = ({
  isBordered = false,
  onPress,
  Icon,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: isBordered ? 'white' : AppColors.primaryColor,
          borderColor: AppColors.primaryColor,
        },
      ]}>
      <Icon
        height={15}
        width={15}
        fill={isBordered ? AppColors.primaryColor : 'white'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
  },
});
export default CounterButton;
