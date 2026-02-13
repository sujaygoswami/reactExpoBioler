import { useLocalSearchParams, Stack } from 'expo-router';
import { TouchableOpacity, View, Text, ScrollView, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// trending img data
import { trendingImgLIstingData } from '../data/TrendingData';


export default function DetailsScreen() {
    // 1. Get the ID from the URL parameters
    const { id } = useLocalSearchParams();

    const router = useRouter();

    // 2. Find the specific item matching that ID
    const item = trendingImgLIstingData.find((p) => p.id.toString() === id);

    if (!item) return <View><Text>Item not found</Text></View>;

    return (
        <ScrollView className="flex-1 bg-white">
            <TouchableOpacity
                onPress={() => router.back()} // Programmatically go back
                style={{ position: 'absolute', top: 50, left: 20, zIndex: 10, padding: 10 }}
            >
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            {/* 3. Set the Header Title dynamically */}
            <Stack.Screen options={{ title: item.title }} />

            {/* 4. Display the Image */}
            <Image
                source={item.img}
                className="w-full h-96"
                contentFit="cover"
            />

            {/* 5. Display Information */}
            <View className="p-6">
                <Text className="text-3xl font-bold text-gray-900">{item.title}</Text>

                <View className="bg-gray-100 p-4 rounded-xl mt-4">
                    <Text className="text-gray-500 font-semibold uppercase tracking-widest text-[10px]">
                        Details & Information
                    </Text>
                    <Text className="text-gray-700 mt-2 leading-6 text-lg">
                        {item.description || "No description provided for this specific photography piece."}
                    </Text>
                </View>

                {/* Additional metadata example */}
                <View className="mt-8 border-t border-gray-100 pt-4">
                    <Text className="text-gray-400 text-sm">Published: Feb 2026</Text>
                    <Text className="text-gray-400 text-sm">Category: Nature Photography</Text>
                </View>
            </View>
        </ScrollView>
    );
}