import React from 'react';
import { Text, View} from "react-native";
import { Link } from "expo-router";
import "../../native.css";




export default function Index() {
  return (
    <View className="main-screen-holder">
      <Text className="text-white font-bold text-xl">Hello NativeWind!</Text>
    </View>
  );
}

