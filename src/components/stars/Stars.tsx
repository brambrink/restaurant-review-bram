import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Stars = ({ rating }: { rating: number }) => {
  const stars = [...Array(Math.ceil(rating))];

  return (
    <View style={{ flexDirection: "row" }}>
      {stars.map((_, index) => {
        const name = Math.floor(rating) > index ? "star" : "star-half";
        return <Icon key={index} name={name} color="#F2C078" />;
      })}
    </View>
  );
};
