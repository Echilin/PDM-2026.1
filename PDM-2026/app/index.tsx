import { Text, View } from "react-native";
import React from 'react';
import {Image, StyleSheet} from 'react-native';


export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 100,
      height: 100,
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>steven</Text>
       <Image
        style={styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Steven_Universe_sprite.png',
        }}
      />

    </View>
  );
}
