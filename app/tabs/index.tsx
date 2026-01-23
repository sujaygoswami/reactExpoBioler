import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";
import { globalStyles } from '../../assets/styles/GlobalStyles';
import styles from '../../assets/styles/styles.scss';



export default function Index() {
  return (
   <View style={styles.containerTwo}>
    <Link href="/news" style={globalStyles.linkButton}>Go to news page</Link>
   </View>
  );
}

