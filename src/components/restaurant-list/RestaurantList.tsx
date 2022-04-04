import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RestaurantProps } from "../../types/Types";
import { StoreContext } from "../../providers/";
import { styles } from "./RestaurantList.style";

import { getRestaurants } from "../../services/restaurant-api/";
import { getReviews } from "../../services/restaurant-api/";

import { RestaurantRow } from "../restaurant-row";
import { NotFoundError } from "../../errors/not-found-error";

interface RestaurantListProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const RestaurantList = ({ navigation }: RestaurantListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
  const [, setReviews] = useContext(StoreContext).reviews;

  useEffect(() => {
    fetchRestaurants();
    fetchReviews();
  }, []);

  const fetchRestaurants = async () => {
    const awaitRestaurants = await getRestaurants();

    if (awaitRestaurants instanceof NotFoundError) {
      console.error("404: Not found!");
      return;
    }

    setRestaurants(awaitRestaurants);
  };

  const fetchReviews = async () => {
    const awaitReviews = await getReviews();

    if (awaitReviews instanceof NotFoundError) {
      console.error("404: Not found!");
      return;
    }

    setReviews(awaitReviews);
  };

  return (
    <View style={styles.root}>
      <View style={{ backgroundColor: "" }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.logo}>🥣</Text>
        </View>
        <Text style={styles.header}>Restaurant Review</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Live search"
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        data={restaurants?.filter(
          (restaurant) =>
            searchQuery === "" || restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
        renderItem={({ item, index }) => (
          <RestaurantRow restaurant={item} index={index} navigation={navigation} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
