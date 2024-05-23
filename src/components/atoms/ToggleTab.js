import {React, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../styles/AppColors';
import TextButton from '../atoms/TextButton';

const ToggleTab = ({leftText, rightText}) => {
  const [isLeft, setIsLeft] = useState(false);

  return (
    <View style={styles.outerView}>
      <TextButton
        text={leftText}
        isFilled={!isLeft}
        onPress={() => {
          setIsLeft(false);
        }}
      />
      <TextButton
        text={rightText}
        isFilled={isLeft}
        onPress={() => {
          setIsLeft(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#F2EAEA',
    borderRadius: 30,
  },
});
export default ToggleTab;
