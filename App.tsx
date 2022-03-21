import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const restaurants = [
    { name: "React Cafe", address: "123 Anywhere St" },
    { name: "Fancy Restaurant", address: "12 Nowhere Blv" },
    { name: "Hipster Coffee", address: "12 There Street" },
  ];

  return (
    <View>
      <Text style={styles.header}>Restaurant Review</Text>

      {restaurants.map((restaurant, index) => (
        <View key={restaurant.name} style={styles.row}>
          <View style={styles.edges}>
            <Text>{index + 1}</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              flex: 8,
            }}
          >
            <Text>{restaurant.name}</Text>
            <Text style={{ color: "grey" }}>{restaurant.address}</Text>
          </View>
          <View style={styles.edges}>
            <Text>Info</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "red",
    flex: 1,
    fontSize: 30,
    fontWeight: "900",
    padding: 40,
    textAlign: "center",
  },
  row: { flexDirection: "row" },
  edges: { alignItems: "center", flex: 1, justifyContent: "center" },
});

export default App;
