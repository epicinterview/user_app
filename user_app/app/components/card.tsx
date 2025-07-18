import React from "react";
import { View, Text } from "react-native";

export default function Card({ data }) {
  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.email}</Text>
      <Text>{data.phone}</Text>
      <Text>{data.website}</Text>
      <Text>{data.company}</Text>
    </View>
  );
}
