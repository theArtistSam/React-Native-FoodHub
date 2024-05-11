import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import StyledText from '../atoms/StyledText'; // Assuming you have a StyledText component
import Heart from '../../../assets/icons/heart.svg'; // Assuming you have a Heart component
import Spacer from '../atoms/Spacer'; // Assuming you have a Spacer component
import { AppColors } from '../../styles/AppColors'; // Assuming you have a constants file with AppColors defined

const RestaurantTile = ({ restaurantName, rating, deliveryTime, foodTags }) => {
    return (
        <View style={styles.outerView}>
            {/* Food Item */}
            <View style={styles.imageView}>
                {/* Background Image */}
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/food.png')}
                />

                <View style={styles.ratingView}>

                    {/* Rating */}
                    <View style={styles.rating}>
                        <StyledText text={rating.toString()} fontSize={14} fontWeight='Bold'></StyledText>
                        <Spacer horizontal={3} />
                        <Heart width={12} />
                        <Spacer horizontal={3} />
                        <StyledText text={"25+"} fontSize={12} />
                    </View>

                    <Spacer style={{ flex: 1 }} />

                    {/* Icon */}
                    <View style={{ backgroundColor: AppColors.primaryColor, padding: 8, borderRadius: 30 }}>
                        <Heart width={20} height={20} fill="white" />
                    </View>
                </View>
            </View>

            <View style={styles.textView}>

                <View style={{ flexDirection: 'row' }}>
                    <StyledText text={restaurantName} fontSize={16} fontWeight='Bold' />
                    <Spacer horizontal={3} />
                    <Heart width={20} height={20} fill={AppColors.confirmColor} />
                </View>

                <Spacer vertical={3} />

                <View style={{ flexDirection: 'row' }}>
                    <Heart width={20} height={20} fill={AppColors.confirmColor} />
                    <Spacer horizontal={3} />
                    <StyledText text={"Free Delivery"} fontSize={14} fontWeight='Medium' color={AppColors.secondaryTextColor} />

                    <Spacer horizontal={10} />

                    <Heart width={20} height={20} fill={AppColors.confirmColor} />
                    <Spacer horizontal={3} />
                    <StyledText text={deliveryTime} fontSize={14} fontWeight='Medium' color={AppColors.secondaryTextColor} />

                </View>

                <Spacer vertical={3} />

                <View style={{ flexDirection: 'row' }}>

                    {foodTags.map((_, index) => (
                        <View key={index} style={{ padding: 8, backgroundColor: "#F6F6F6", borderRadius: 5, marginRight: 10 }}>
                            <StyledText text={foodTags[index]} fontSize={14} fontWeight='Medium' color={AppColors.secondaryTextColor} />
                        </View>
                    ))}

                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerView: {
        backgroundColor: 'white',
        shadowColor: 'rgba(0, 0, 0, .3)', // Shadow color with 30% opacity
        shadowRadius: 20,
        elevation: 5,
        marginRight: 15,
        borderRadius: 15 // Elevation for Android shadow
    },
    imageView: {
        height: 140,
    },
    image: {
        flex: 1, resizeMode: 'cover', width: null, height: null, borderRadius: 15
    },
    ratingView: {
        margin: 10, flexDirection: 'row', position: 'absolute', alignItems: 'center'
    },
    rating: {
        padding: 8, flexDirection: 'row', backgroundColor: 'white', borderRadius: 50, alignItems: 'center'
    },
    textView: {
        padding: 15
    }
});
export default RestaurantTile;
