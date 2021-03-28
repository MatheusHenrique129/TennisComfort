import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Shoes(props) {
  function filterDesc(description) {
    if (description.length < 27) {
      return description;
    }

    return `${description.substring(0, 24)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },

  shoesImg: {
    width: 175,
    height: 175,
  },

  shoesText: {
    fontSize: 16,
  },
});
