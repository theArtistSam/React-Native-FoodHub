import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {AppColors} from '../styles/AppColors';
import StyledText from '../components/atoms/StyledText';
import Spacer from '../components/atoms/Spacer';
import TextButton from '../components/atoms/TextButton';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={{height: 50}}>
        <TextButton
          text={'LOGIN'}
          onPress={() => navigation.navigate('VerificationCode')}
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
          text={"Don't have an account"}
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
  },
  forgotText: {
    color: '#FF6F61',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
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
  },
});
