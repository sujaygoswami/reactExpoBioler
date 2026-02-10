import React from 'react';
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../GlobalStyles';
import { Image } from 'expo-image';




export default function Index() {
  return (
    <View className="main-screen-holder">
      <View className='w-full flex-row flex-wrap' style={[globalStyles.TrendingImageListingWrap, globalStyles.PaddingAllDefault]}>
        <View className="w-1/2 rounded-2xl shadow-md overflow-hidden" style={[globalStyles.AppImageCard]}>
          <Image
            source={require('../../assets/images/photography-1.jpg')}
            className="!w-full !aspect-square"
            contentFit="cover"
          />
        </View>
        <View className="w-1/2 rounded-2xl shadow-md overflow-hidden" style={[globalStyles.AppImageCard]}>
          <Image
            source={require('../../assets/images/photography-1.jpg')}
            className="!w-full !aspect-square"
            contentFit="cover"
          />
        </View>
        <View className="w-1/2 rounded-2xl shadow-md overflow-hidden" style={[globalStyles.AppImageCard]}>
          <Image
            source={require('../../assets/images/photography-1.jpg')}
            className="!w-full !aspect-square"
            contentFit="cover"
          />
        </View>
      </View>
    </View>
  );
}

