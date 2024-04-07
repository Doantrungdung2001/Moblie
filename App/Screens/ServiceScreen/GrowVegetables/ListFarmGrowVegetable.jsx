import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "../../../Constants";
import { Ionicons } from "@expo/vector-icons";
const ListFarmGrowVegetable = ({ farm }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: farm?.image }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "Roboto-BoldItalic",
            fontSize: 25,
          }}
        >
          {farm.name}
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            color: COLORS.black,
            fontSize: 17,
          }}
        >
          <Ionicons
            name="ios-location-sharp"
            size={24}
            color={COLORS.secondary}
            style={{ marginRight: 14 }}
          />
          {farm.district}
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            color: COLORS.gray,
            fontSize: 14,
          }}
        >
          {farm.distance} km
        </Text>
      </View>
    </View>
  );
};

export default ListFarmGrowVegetable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});
