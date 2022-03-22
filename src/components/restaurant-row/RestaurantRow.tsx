import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RestaurantProps } from "../../types/Types";

import { Stars } from "../stars/";

interface RestaurantRowProps {
  restaurant: RestaurantProps;
  index: number;
  navigation: NativeStackNavigationProp<any, any>;
}

export const RestaurantRow = ({ restaurant, navigation, index }: RestaurantRowProps) => {
  const infoPressed = () => {
    navigation.navigate("Info", { restaurant });
  };

  return (
    <View key={restaurant.id} style={{ backgroundColor: index % 2 === 0 ? "white" : "#f3f3f7" }}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={restaurant.rating} />
        </View>
        <View style={styles.nameAdress}>
          <Text>{restaurant.name}</Text>
          <Text style={{ color: "grey" }}>{restaurant.address}</Text>
        </View>
        <View style={styles.edges}>
          <TouchableOpacity onPress={infoPressed} style={styles.button}>
            <Text style={{ color: "white", fontWeight: "600" }}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#7EBC89",
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  row: { flexDirection: "row", paddingVertical: 10 },
  edges: { alignItems: "center", flex: 1, justifyContent: "center", minWidth: 50 },
  stars: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    minWidth: 50,
    padding: 10,
  },
  nameAdress: { flexDirection: "column", flex: 8 },
  container: {
    paddingTop: 30,
  },
  info: {
    borderColor: "#F5F5F5",
    borderRadius: 10,
    borderWidth: 4,
    flex: 1,
    fontWeight: "900",
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
  },
});
