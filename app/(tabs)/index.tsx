import React, { useState } from 'react';
import { Text, View, ScrollView, Modal, TouchableOpacity, Pressable } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../GlobalStyles';
import { Image } from 'expo-image';


const trendingImgLIstingData = [
  { id: 1, title: 'Photography 1', img: require('../../assets/images/photography-1.jpg') },
  { id: 2, title: 'Photography 2', img: require('../../assets/images/photography-2.jpg') },
  { id: 3, title: 'Photography 3', img: require('../../assets/images/photography-3.jpg') },
  { id: 4, title: 'Photography 4', img: require('../../assets/images/photography-4.jpg') },
  { id: 5, title: 'Photography 5', img: require('../../assets/images/photography-5.jpg') },
  { id: 6, title: 'Photography 6', img: require('../../assets/images/photography-6.jpg') },
  { id: 7, title: 'Photography 7', img: require('../../assets/images/photography-7.jpg') },
  { id: 8, title: 'Photography 8', img: require('../../assets/images/photography-8.jpg') },
];

interface ImageItem {
  id: number;
  title: string;
  img: any;
}




export default function Index() {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);
  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="main-screen-holder">
        <View className='w-full flex-row flex-wrap' style={[globalStyles.TrendingImageListingWrap, globalStyles.PaddingAllDefaultVar1, globalStyles.GridRowDefault]}>


          {trendingImgLIstingData.map((item) => (
            <View key={item.id} className="w-1/2" style={[globalStyles.GridColDfault]}>
              <Pressable onPress={() => setSelectedItem(item)} className="rounded-2xl shadow-md overflow-hidden" style={[globalStyles.AppImageCard]}>
                <Image
                  source={item.img}
                  className="!w-full !aspect-square"
                  contentFit="cover"
                />
              </Pressable>
            </View>
          ))}


        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedItem !== null}
        onRequestClose={() => setSelectedItem(null)} // Handles Android back button
      >
        {/* Semi-transparent background overlay */}
        <Pressable
          className="flex-1 justify-center items-center bg-black/70 p-6"
          onPress={() => setSelectedItem(null)} // Close on background click
        >
          {/* Popup Content Box (Prevent clicks here from closing the modal) */}
          <Pressable className="bg-white w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              source={selectedItem?.img}
              className="w-full h-64"
              contentFit="cover"
            />
            <View className="p-5">
              <Text className="text-2xl font-bold text-gray-900">{selectedItem?.title}</Text>
              <Text className="text-gray-500 mt-2">
                This is additional info for {selectedItem?.title}. You can pull this from your JSON data.
              </Text>

              {/* Close Button */}
              <TouchableOpacity
                onPress={() => setSelectedItem(null)}
                className="mt-6 bg-blue-600 p-4 rounded-xl"
              >
                <Text className="text-white text-center font-bold">Close Details</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </ScrollView>
  );
}

