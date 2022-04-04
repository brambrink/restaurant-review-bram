import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RestaurantProps } from "../../types/Types";
import { styles } from "./RestaurantRow.style";

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
    <View key={restaurant.id} style={[styles.row]}>
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
  );
};
