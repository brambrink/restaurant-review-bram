import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface AddReviewProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const AddReview = ({ navigation }: AddReviewProps) => {
  type ReviewProps = {
    name: string;
    rating: number;
    comment: string;
  };

  const [review, setReview] = useState<ReviewProps>({ name: "", rating: 0, comment: "" });

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
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

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  addReview: {
    fontSize: 28,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "600",
  },
  name: {
    height: 40,
    width: "auto",
    backgroundColor: "#FAEDCA",
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
  },
  rating: {
    fontSize: 18,
    fontWeight: "500",
  },
  stars: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  starButton: {
    padding: 5,
  },
  comment: {
    backgroundColor: "#FAEDCA",
    borderRadius: 4,
    height: 200,
    maxHeight: 200,
    marginTop: 20,
    padding: 10,
    width: "auto",
  },
  button: {
    backgroundColor: "#7EBC89",
    borderRadius: 3,
    marginTop: 40,
    padding: 10,
    width: "auto",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },
});
