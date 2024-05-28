import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Avatar, ListItem, Icon} from 'react-native-elements';

const reviews = [
  {
    id: 1,
    name: 'Ayesha',
    date: '25/06/2024',
    rating: 5,
    review:
      'Really convenient and the points system helps benefit loyalty. Some mild glitches here and there, but nothing too egregious. Obviously needs to roll out to more remote.',
    avatar: './assets/foodhub pic.jpg',
  },
  {
    id: 2,
    name: 'Abdullah Mehdi',
    date: '22/06/2023',
    rating: 4,
    review:
      'Been a life saver for keeping our sanity during the pandemic, although they could improve some of their UI and how they handle specials as it often is unclear how to use them or everything is sold out so fast it feels a bit bait and switch. Still I’d be stir crazy and losing track of days without so...',
    avatar: 'https://via.placeholder.com/150', // idhr koi picture dalni
  },
  {
    id: 3,
    name: 'Abdul Waheed',
    date: '21/06/2022',
    rating: 3,
    review:
      'Got an intro offer of 50% off first order that did not work..... I have scaled the app to find a contact us button but only a spend with us button available.',
    avatar: 'https://via.placeholder.com/150', // idhr bhi
  },
  {
    id: 4,
    name: 'Muhammad Muslim',
    date: '20/06/2022',
    rating: 2,
    review:
      'The app has potential, but there are still many issues that need to be addressed. The interface can be more intuitive, and it often crashes when trying to navigate between screens. Hoping for improvements in future updates.',
    avatar: 'https://via.placeholder.com/150', // idhr bhi
  },
];

const ReviewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" type="font-awesome" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reviews</Text>
      </View>
      <ScrollView>
        <ListItem containerStyle={styles.writeReviewContainer} bottomDivider>
          <Avatar source={{uri: 'https://via.placeholder.com/150'}} rounded />
          <ListItem.Content>
            <ListItem.Title style={styles.writeReviewText}>
              Write your review...
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        {reviews.map(review => (
          <ListItem
            key={review.id}
            containerStyle={styles.reviewContainer}
            bottomDivider>
            <Avatar source={{uri: review.avatar}} rounded />
            <ListItem.Content>
              <ListItem.Title style={styles.reviewName}>
                {review.name}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.reviewDate}>
                {review.date}
              </ListItem.Subtitle>
              <View style={styles.rating}>
                {[...Array(review.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    type="font-awesome"
                    size={15}
                    color="#ffd700"
                  />
                ))}
              </View>
              <ListItem.Subtitle style={styles.reviewText}>
                {review.review}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

export default ReviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  writeReviewContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  writeReviewText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#777',
  },
  reviewContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewDate: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
  },
});
