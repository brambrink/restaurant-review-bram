import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { RestaurantProps } from "../../types/Types";

import { Stars } from "../stars/Stars";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface RestaurantInfoProps {
  route: RouteProp<{ param: { restaurant: RestaurantProps } }>;
  navigation: NativeStackNavigationProp<any, any>;
}
export const RestaurantInfo = ({ route, navigation }: RestaurantInfoProps) => {
  const restaurant = route.params.restaurant;

  const addReview = () => {
    navigation.navigate("AddReview");
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: `http://localhost:3004/images/${restaurant.image}`,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text>{restaurant.address}</Text>
        <View style={styles.stars}>
          <Stars rating={restaurant.rating} />
        </View>

        <TouchableOpacity style={styles.button} onPress={addReview}>
          <Text style={{ color: "white", fontWeight: "600" }}>Add review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stars: {
    paddingVertical: 10,
  },
  root: { height: "auto", flexDirection: "row", backgroundColor: "#FAEDCA" },
  image: {
    borderRadius: 10,
    height: 100,
    margin: 20,
    width: 100,
  },
  info: {
    flex: 1,
    marginTop: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#7EBC89",
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 2,
    width: 100,
  },
});
