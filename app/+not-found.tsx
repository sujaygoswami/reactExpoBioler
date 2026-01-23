import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';
import { globalStyles } from '../assets/styles/GlobalStyles';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={globalStyles.container}>
        <Link href="/tabs" style={globalStyles.linkButton}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}


