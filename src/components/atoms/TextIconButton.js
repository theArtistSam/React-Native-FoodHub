import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {AppColors} from '../../styles/AppColors';
import StyledText from '../atoms/StyledText'; // Assuming you have a StyledText component

const TextIconButton = ({title, onPress, Icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outerView}>
      <View style={styles.innerView}>
        <Icon width={15} height={15} fill={AppColors.primaryColor} />
      </View>
      <StyledText
        style={{marginHorizontal: 10}}
        text={title}
        fontWeight="SemiBold"
        color="white"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerView: {
    position: 'absolute',
    bottom: 20, // Adjust as needed
    alignSelf: 'center', // Center horizontally
    flexDirection: 'row',
    backgroundColor: AppColors.primaryColor,
    borderRadius: 30,
    padding: 5,
    alignItems: 'center',
  },
  innerView: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
  },
});

export default TextIconButton;
