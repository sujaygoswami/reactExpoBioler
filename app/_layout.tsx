import { Stack } from "expo-router";
import { View, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {globalStyles} from '../GlobalStyles';
import "../native.css";


export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      header: () => (
          <SafeAreaView style={globalStyles.safeAreaGlobalHeader}>
            <View style={globalStyles.headerContainer}>
             
              <View style={globalStyles.leftContainer}>
                <Image 
                  source={require('../assets/images/camera-logo.png')} 
                  style={globalStyles.logo} 
                  resizeMode="contain" 
                />
              </View>
              
              
              <TouchableOpacity 
                style={globalStyles.rightContainer} 
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
