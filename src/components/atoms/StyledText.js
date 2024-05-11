import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { AppColors } from '../../styles/AppColors';

const StyledText = ({ text, fontSize = 16, color = AppColors.primaryTextColor, fontWeight = "Medium", padding = 0, style }) => {
    return (
        <Text style={[{ fontFamily: `SofiaSans-${fontWeight}`, fontSize: fontSize, color: color, padding: padding }, style]}>{text}</Text>
    );
}



export default StyledText;
