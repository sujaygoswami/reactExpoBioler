import { Stack } from "expo-router";
import { View, Image, TouchableOpacity, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {globalStyles} from '../GlobalStyles';
import "../native.css";
import { useFonts, Inter_200ExtraLight } from '@expo-google-fonts/inter';


export default function RootLayout() {


  let [fontsLoaded] = useFonts({ Inter_200ExtraLight });

  if (!fontsLoaded) return null;


  return (
    <Stack
    screenOptions={{
      header: () => (
          <SafeAreaView style={globalStyles.safeAreaGlobalHeader}>
            <View style={globalStyles.headerContainer}>
             
              <View style={globalStyles.HeaderleftContainer}>
                <Image 
                  source={require('../assets/images/camera-logo.png')} 
                  style={globalStyles.logo} 
                  resizeMode="contain" 
                />
              </View>


              <View style={globalStyles.HeadermiddleContainer}>
                <Text style={{ fontFamily: 'Inter_200ExtraLight' }} className="text-2xl text-gray-900">Trending</Text>
              </View>
              
              
              <TouchableOpacity 
                style={globalStyles.HeaderrightContainer} 
                onPress={() => console.log('Menu Pressed')}
              >
                <Ionicons name="menu" size={28} color="#333" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        ),
        
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen name="news" options={{ title: 'News' }} />
    </Stack>
  );
}
