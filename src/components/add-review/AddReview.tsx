import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface AddReviewProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const AddReview = ({ navigation }: AddReviewProps) => {
  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onClose}>
        <Icon name="close" size={30} />
      </TouchableOpacity>
      <Text style={styles.addReview}>Add Review</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  addReview: {},
});
