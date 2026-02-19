import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Modal, TouchableOpacity, Pressable } from "react-native";
import { globalStyles } from '../../GlobalStyles';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';


// trending img data
// import { trendingImgLIstingData } from '../data/TrendingData';

interface ImageItem {
  id: number;
  title: string;
  img: any;
}




export default function Index() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);

  // 1. Create state to hold the data
  const [dataList, setDataList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. Fetch from your DDEV TYPO3 backend
    fetch('https://react-typo-trending-img.ddev.site')
      .then((res) => res.json())
      .then((json) => {
        // 3. Map the complex TYPO3 gallery structure to your simple app structure
        const remoteData = json.content.colPos0.map((item: any) => {
          // Dig into the 'gallery' rows to find the image URL
          const imgUrl = item.content.gallery?.rows?.["1"]?.columns?.["1"]?.publicUrl;

          return {
            id: item.id,
            title: item.content.header,
            description: item.content.bodytext,
            // Convert URL string into a React Native source object
            img: imgUrl ? { uri: imgUrl } : null, 
          };
        });

        setDataList(remoteData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("TYPO3 Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <View className="flex-1 justify-center"><Text>Loading...</Text></View>;


  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="main-screen-holder">
        <View className='w-full flex-row flex-wrap' style={[globalStyles.TrendingImageListingWrap, globalStyles.PaddingAllDefaultVar1, globalStyles.GridRowDefault]}>


          {dataList.map((item) => (
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

               {/* Detail Button */}
              <TouchableOpacity 
                  onPress={() => {
                    const id = selectedItem?.id;
                    setSelectedItem(null); // Always close modal first
                    // Navigate to details page
                    router.push(`/details/${id}`); 
                  }}
                  className="flex-1 bg-blue-600 p-4 rounded-xl"
                >
                  <Text className="text-white text-center font-bold">Detail</Text>
                </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </ScrollView>
  );
}

