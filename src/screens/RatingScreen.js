import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {BackArrow, Star} from '../../assets/icons';
import {AppColors} from '../styles/AppColors';
import TextIconButton from '../components/atoms/TextIconButton';
import TextButton from '../components/atoms/TextButton';
import Spacer from '../components/atoms/Spacer';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_600SemiBold,
// } from '@expo-google-fonts/poppins';

const RatingScreen = () => {
  const [rating, setRating] = useState(4);
  const [reviewText, setReviewText] = useState('');

  //   let [fontsLoaded] = useFonts({
  //     Poppins_400Regular,
  //     Poppins_600SemiBold,
  //   });

  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <BackArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1620174645265-05820da4ff20?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>
          How was your last order from Pizza Hut?
        </Text>
        <Text style={[styles.subtitle, {color: AppColors.primaryColor}]}>
          Good
        </Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <Star fill="yellow" />
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Write"
          value={reviewText}
          onChangeText={setReviewText}
          placeholderTextColor="#aaa"
        />
        {/* <Spacer style={{flex: 1}} /> */}
        <View style={{height: 50}}>
          <TextButton text={'SUBMIT'} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SofiaSans-Medium',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 20,
    color: 'green',
    fontFamily: 'SofiaSans-Bold',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  submitButton: {
    backgroundColor: '#008080',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  submitButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
});
