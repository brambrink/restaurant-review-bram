import React from "react";
import { View, Text } from "react-native";

import { styles } from "./About.style";

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
