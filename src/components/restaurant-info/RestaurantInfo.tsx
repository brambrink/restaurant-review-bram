import React, { useContext } from "react";
import { Text, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { RouteProp } from "@react-navigation/native";

import { RestaurantProps } from "../../types/Types";
import { styles } from "./RestaurantInfo.style";

import { Stars } from "../stars/Stars";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StoreContext } from "../../providers/";

interface RestaurantInfoProps {
  route: RouteProp<{ param: { restaurant: RestaurantProps } }>;
  navigation: NativeStackNavigationProp<any, any>;
}
export const RestaurantInfo = ({ route, navigation }: RestaurantInfoProps) => {
  const restaurant = route.params.restaurant;

  const [reviews] = useContext(StoreContext).reviews;

  const addReview = () => {
    navigation.navigate("AddReview", { restaurant });
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
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
      <ScrollView style={styles.reviewContainer}>
        {reviews
          .filter(({ restaurantName }) => restaurantName === restaurant.name)
          .map(({ comment, rating, name, id }) => (
            <View style={styles.reviewWrapper} key={id}>
              <View style={styles.starsWrapper}>
                <Stars rating={rating} />
              </View>
              <Text style={styles.review}>{comment} </Text>
              <Text style={styles.reviewer}>Reviewed by: {name}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};
