import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RestaurantProps } from "../../types/Types";

import { getRestaurants } from "../../services/restaurant-api/get-restaurants";
import { RestaurantRow } from "../restaurant-row";
import { NotFoundError } from "../../errors/not-found-error";

interface RestaurantListProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const RestaurantList = ({ navigation }: RestaurantListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const awaitRestaurants = await getRestaurants();

    if (restaurants instanceof NotFoundError) {
      console.error("404: Not found!");
      return;
    }

    setRestaurants(awaitRestaurants);
  };

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.logo}>🥣</Text>
      </View>
      <Text style={styles.header}>Restaurant Review</Text>
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

const styles = StyleSheet.create({
  header: {
    color: "#403429",
    flex: 1,
    fontSize: 30,
    fontWeight: "900",
    paddingTop: 10,
    paddingBottom: 40,
    fontFamily: "Rockwell",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 1,
    borderColor: "#DDD",
    color: "#444",
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 20,
  },
  logo: {
    margin: 0,
    padding: 0,
    fontSize: 70,
  },
});
