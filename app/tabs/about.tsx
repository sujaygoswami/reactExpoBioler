import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from '../../assets/styles/GlobalStyles';


export default function AboutScreen() {
  return (
   <View style={globalStyles.container}>
    <Text style={globalStyles.text}>About Screen</Text>
   </View>
  );
}

