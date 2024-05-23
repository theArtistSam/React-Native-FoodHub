import React from 'react';
import StyledText from '../atoms/StyledText';
import {AppColors} from '../../styles/AppColors';
import {TouchableOpacity, StyleSheet} from 'react-native';
const TextButton = ({text, onPress, isFilled = true}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: isFilled ? AppColors.primaryColor : '#F2EAEA'},
      ]}>
      <StyledText
        text={text}
        color={isFilled ? 'white' : AppColors.primaryColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default TextButton;
