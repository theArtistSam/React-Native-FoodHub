import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {AppColors} from '../../styles/AppColors';
const SearchTextInput = ({Icon}) => {
  return (
    <View style={styles.view}>
      <Icon width={20} height={20} fill="white"></Icon>
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.input}
        placeholder="Find for food or restaurant..."
        placeholderTextColor={AppColors.secondaryTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: AppColors.borderColor,
    borderRadius: 10,
    backgroundColor: '#FCFCFD',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    color: AppColors.primaryTextColor,
    fontSize: 16,
  },
});
export default SearchTextInput;
