import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import StyledText from '../components/atoms/StyledText';
import {AppColors} from '../styles/AppColors';
import Spacer from '../components/atoms/Spacer';
import TextButton from '../components/atoms/TextButton';
import App from '../../App';
export default function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full name"
        placeholderTextColor={AppColors.secondaryTextColor}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        placeholderTextColor={AppColors.secondaryTextColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={AppColors.secondaryTextColor}
      />
      <View style={{height: 50}}>
        <TextButton
          text={'SIGNUP'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <Spacer vertical={10} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('SignUp')}>
        <StyledText
          text={'Already have an account?'}
          color={AppColors.secondaryTextColor}
        />
        <Spacer horizontal={3} />
        <StyledText text={'Sign Up'} color={AppColors.primaryColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: 'black',
    fontFamily: 'SofiaSans-Bold',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'black',
    // fontFamily: 'SofiaSans-Bold',
  },
  button: {
    backgroundColor: '#FF6F61',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    color: '#FF6F61',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'SofiaSans-Bold',
  },
});
