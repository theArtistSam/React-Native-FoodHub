import React from 'react';
import {View} from 'react-native';

const Spacer = ({vertical = 0, horizontal = 0, style}) => {
  return (
    <View
      style={[
        {marginVertical: vertical, marginHorizontal: horizontal},
        style,
      ]}></View>
  );
};

export default Spacer;
