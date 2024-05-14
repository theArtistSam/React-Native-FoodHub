import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../styles/AppColors';
import Heart from '../../../assets/icons/heart.svg';
import StyledText from '../../components/atoms/StyledText';
const Appbar = ({title}) => {
  return (
    <View style={styles.view}>
      <Heart></Heart>
      <StyledText
        style={{flex: 1, textAlign: 'center'}}
        text={title}
        fontSize={20}
        fontWeight={'Bold'}></StyledText>
      <Image
        style={{borderRadius: 10}}
        source={require('../../../assets/images/person.png')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Appbar;
