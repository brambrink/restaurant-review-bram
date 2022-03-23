import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TextInput, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";

import { ReviewProps, RestaurantProps } from "../../types/Types";
import { styles } from "./AddReview.style";

import { addReview } from "../../services/restaurant-api/add-review";
import { StoreContext } from "../../providers/";
import { NotFoundError } from "../../errors/not-found-error";
import { getReviews } from "../../services/restaurant-api";

interface AddReviewProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<{ param: { restaurant: RestaurantProps } }>;
}

export const AddReview = ({ navigation, route }: AddReviewProps) => {
  const [, setReviews] = useContext(StoreContext).reviews;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const restaurant = route.params.restaurant;

  const [review, setReview] = useState<ReviewProps>({
    name: "",
    rating: 0,
    comment: "",
    restaurantName: "",
  });

  const fetchReviews = async () => {
    const awaitReviews = await getReviews();

    if (awaitReviews instanceof NotFoundError) {
      console.error("404: Not found!");
      return;
    }

    setReviews(awaitReviews);
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onSubmit = async () => {
    setIsSubmitting(true);

    if (review.name !== null && review.name !== undefined) {
      AsyncStorage.setItem("reviewerName", review.name);
    }

    await addReview({ ...review, restaurantName: restaurant.name });
    await fetchReviews();
    setIsSubmitting(false);

    navigation.goBack();
  };

  useEffect(() => {
    AsyncStorage.getItem("reviewerName").then((reviewerName) =>
      setReview({
        ...review,
        name: reviewerName || "",
      }),
    );
  }, []);

  return (
    <KeyboardAwareScrollView style={styles.root}>
      <TouchableOpacity onPress={onClose}>
        <Icon name="close" size={30} />
      </TouchableOpacity>
      <Text style={styles.addReview}>Add Review</Text>

      <TextInput
        style={styles.name}
        placeholder="Name (optional)"
        value={review.name}
        onChangeText={(name) => {
          setReview({ ...review, name });
        }}
      />

      <View style={styles.stars}>
        <Text style={styles.rating}>Your rating:</Text>

        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <TouchableOpacity
              onPress={() => setReview({ ...review, rating })}
              style={styles.starButton}
              key={rating}
            >
              <Icon
                name={"star"}
                style={{ color: review.rating >= rating ? "#F2C078" : "lightgrey" }}
                size={24}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TextInput
        style={styles.comment}
        placeholder="Review"
        value={review.comment}
        multiline={true}
        numberOfLines={5}
        onChangeText={(comment) => {
          setReview({ ...review, comment });
        }}
      />

      <TouchableOpacity style={styles.button} disabled={isSubmitting}>
        <Text style={styles.buttonText} onPress={onSubmit}>
          Submit review
        </Text>
      </TouchableOpacity>

      {isSubmitting && <ActivityIndicator style={styles.indicator} size="large" />}
    </KeyboardAwareScrollView>
  );
};
