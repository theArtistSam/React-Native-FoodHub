import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from '../atoms/StyledText'; // Assuming you have a StyledText component
import Heart from '../../../assets/icons/heart.svg'; // Assuming you have a Heart component
import Spacer from '../atoms/Spacer'; // Assuming you have a Spacer component
import { AppColors } from '../../styles/AppColors'; // Assuming you have a constants file with AppColors defined

const FoodTile = ({ foodName, foodType, price, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.outerView}>
            {/* Food Item */}
            <View style={styles.imageView}>
                {/* Background Image */}
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/food.png')}
                />

                <View style={styles.ratingView}>

                    {/* Price */}
                    <View style={styles.rating}>
                        <StyledText text={"$"} color={AppColors.primaryColor} fontSize={12} />
                        <Spacer horizontal={3} />
                        <StyledText text={price.toString()} fontSize={18} fontWeight='Bold'></StyledText>
                    </View>

                    <Spacer style={{ flex: 1 }} />

                    {/* Icon */}
                    <View style={{ backgroundColor: AppColors.primaryColor, padding: 8, borderRadius: 30 }}>
                        <Heart width={20} height={20} fill="white" />
                    </View>
                </View>
            </View>

            <View style={styles.textView}>

                <StyledText text={foodName} fontSize={16} fontWeight='Bold' />

                <Spacer vertical={3} />

                <StyledText text={foodType} fontSize={14} fontWeight='Medium' color={AppColors.secondaryTextColor} />

            </View>
        </TouchableOpacity>
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
        paddingVertical: 8, paddingHorizontal: 12, flexDirection: 'row', backgroundColor: 'white', borderRadius: 50, alignItems: 'center'
    },
    textView: {
        padding: 15
    }
});
export default FoodTile;
