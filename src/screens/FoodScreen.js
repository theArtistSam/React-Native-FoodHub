import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from '../styles/core/RootStyle';
import StyledIconButton from '../components/atoms/StyledIconButton';
import StyledText from '../components/atoms/StyledText';
import {AppColors} from '../styles/AppColors';
import Spacer from '../components/atoms/Spacer';
import Heart from '../../assets/icons/heart.svg';
import SearchTextInput from '../components/atoms/SearchTextInput';
import FoodCategory from '../components/molecules/FoodCategory';
import RestaurantTile from '../components/molecules/RestaurantTIle';
import FoodTile from '../components/molecules/FoodTile';
import CounterButton from '../components/atoms/CounterButton';
import RadioButton from '../components/atoms/RadioButton';
import AddOnTile from '../components/molecules/AddOnTile';
import TextIconButton from '../components/atoms/TextIconButton';
import {BackArrow, Bike, Cart, Minus, Plus, Star} from '../../assets/icons';

const addOnItems = [
  {id: '1', addOn: 'Pepper Julienned', price: 2.3},
  {id: '2', addOn: 'Pepper Julienned', price: 3.3},
  {id: '3', addOn: 'Pepper Julienned', price: 4.3},
  // { id: '4', addOn: 'Pepper Julienned', price: 5.30 },
  // { id: '5', addOn: 'Pepper Julienned', price: 1.30 },
  // { id: '6', addOn: 'Pepper Julienned', price: 2.30 },
  // { id: '7', addOn: 'Pepper Julienned', price: 4.30 },
];
const FoodScreen = ({navigation}) => {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.root}>
      <View style={{height: 200}}>
        <Image
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: 'cover',
            borderRadius: 15,
          }}
          source={require('../../assets/images/food.png')}></Image>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
          }}>
          <StyledIconButton
            onPress={() => navigation.goBack()}
            Icon={BackArrow}
            width={18}
            height={15}></StyledIconButton>
          <Spacer style={{flex: 1}} />
          <View
            style={{
              backgroundColor: AppColors.primaryColor,
              padding: 8,
              borderRadius: 30,
            }}>
            <Heart width={20} height={20} fill="white" />
          </View>
        </View>
      </View>

      <Spacer vertical={10} />
      <StyledText text={'Ground Beef Tacos'} fontSize={28} />
      <Spacer vertical={5} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Star fill={'#FFC529'} />

        <Spacer horizontal={5} />

        <StyledText text={'4.5'} fontSize={16} fontWeight="Bold" />

        <Spacer horizontal={5} />

        <StyledText
          text={'(30+)'}
          fontSize={16}
          fontWeight="Regular"
          color={AppColors.secondaryTextColor}
        />

        <Spacer horizontal={5} />

        <TouchableOpacity onPress={() => {}}>
          <StyledText
            text={'See Review'}
            color={AppColors.primaryColor}
            fontWeight="Regular"
            fontSize={14}></StyledText>
        </TouchableOpacity>
      </View>

      <Spacer vertical={5} />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <StyledText
          text={'$'}
          fontSize={16}
          fontWeight="Bold"
          color={AppColors.primaryColor}
        />
        <StyledText
          text={'9.50'}
          fontSize={28}
          fontWeight="Bold"
          color={AppColors.primaryColor}
        />
        <Spacer style={{flex: 1}} />

        <CounterButton
          Icon={Minus}
          isDisabled={count == 0}
          isBordered={true}
          onPress={() => {
            if (count >= 1) setCount(count - 1);
          }}
        />
        <Spacer horizontal={5} />
        <StyledText text={count.toString()} fontSize={16} fontWeight="Bold" />
        <Spacer horizontal={5} />
        <CounterButton
          Icon={Plus}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>

      <Spacer vertical={10} />

      <StyledText
        fontSize={18}
        color={AppColors.secondaryTextColor}
        text={
          'Brown the beef better. Lean ground beef - I like to use 85% lean angus. Garlic - use fresh chopped. Spices chili powder, cumin, onion powder.'
        }
      />

      <Spacer vertical={10} />

      <StyledText
        text={'Choice of Add On'}
        fontSize={18}
        fontWeight="SemiBold"
      />

      <Spacer vertical={5} />

      <FlatList
        data={addOnItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <AddOnTile addOn={item.addOn} price={item.price} />
        )}
      />

      <TextIconButton
        title={'ADD TO CART'}
        onPress={() => {
          navigation.push('CartScreen');
        }}
        Icon={Cart}
      />
    </View>
  );
};

export default FoodScreen;
