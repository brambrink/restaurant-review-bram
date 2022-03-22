import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet } from "react-native";

export const About = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.header}>Restaurant Review</Text>

      <Text style={styles.logo}>🥣</Text>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Text>

      <Text style={styles.text}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  header: {
    color: "#403429",
    fontFamily: "Rockwell",
    fontSize: 30,
    fontWeight: "900",
    paddingTop: 40,
    textAlign: "center",
  },
  logo: {
    fontSize: 100,
    padding: 10,
  },
  text: { paddingBottom: 10 },
});
