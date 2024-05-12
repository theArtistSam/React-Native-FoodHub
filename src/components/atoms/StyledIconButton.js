import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

const StyledIconButton = ({
  onPress,
  Icon,
  width = 12,
  height = 6,
  iconColor = 'black',
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon width={width} height={height} fill={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 12,
    shadowOffset: {width: 5, height: 10},
    shadowColor: 'rgba(0, 0, 0, .3)', // Shadow color with 30% opacity
    shadowRadius: 20,
    elevation: 5, // Elevation for Android shadow
  },
});

export default StyledIconButton;
