import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import "../../native.css";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#2e2925ff',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#2a2e25ff',
        },
        tabBarLabelStyle:{
          color: '#fff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }} />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }} />
    </Tabs>
  );
}
