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
          <Icon name="arrow-left" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}} // idhr koi food brand logo add krna hai
          style={styles.avatar}
        />
        <Text style={styles.title}>
          How was your last order from Pizza Hut?
        </Text>
        <Text style={styles.subtitle}>Good</Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <Icon
              key={index}
              name={index < rating ? 'star' : 'star-o'}
              type="font-awesome"
              size={32}
              color="#ffd700"
              onPress={() => setRating(index + 1)}
            />
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Write"
          value={reviewText}
          onChangeText={setReviewText}
          placeholderTextColor="#aaa"
        />
        <Button
          title="SUBMIT"
          buttonStyle={styles.submitButton}
          titleStyle={styles.submitButtonText}
          onPress={() =>
            console.log('Review submitted:', reviewText, 'Rating:', rating)
          }
        />
      </View>
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'green',
    fontFamily: 'Poppins_400Regular',
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
