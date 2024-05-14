import React from 'react';
import StyledText from '../atoms/StyledText';
import {AppColors} from '../../styles/AppColors';
import {TouchableOpacity, StyleSheet} from 'react-native';
const TextButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <StyledText text={text} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.primaryColor,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default TextButton;
