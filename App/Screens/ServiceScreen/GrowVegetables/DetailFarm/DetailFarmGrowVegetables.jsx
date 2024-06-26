import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../Constants";
import IntruductionProject from "../IntruductionFarm/IntruductionFarm";
import ListGardenService from "../ListGardenService/ListGardenService";
import ListGarden from "../../../../Components/ListGarden/ListGarden";

import styles from "./DetailFarm.Styles";
const DetailFarmGrowVegetables = () => {
  const param = useRoute().params;
  const [farmInformation, setFarmInformation] = useState(param.farmInfo);
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: farmInformation?.avatar }}
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameFarm}>{farmInformation.name}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.emailFarm}>{farmInformation?.email}</Text>
            <Text style={styles.phoneFarm}>{farmInformation?.phone}</Text>
          </View>
          <Text style={styles.addressFarm}>
            <Ionicons
              name="ios-location-sharp"
              size={24}
              color={COLORS.secondary}
              style={{ marginRight: 14 }}
            />
            {farmInformation.address}
          </Text>

          {/* Horizontal Line */}
          <View style={styles.line}></View>

          <IntruductionProject Info={farmInformation} />

          {/* Horizontal Line */}
          <View style={styles.line}></View>
        </View>
        {/* slider service */}
        <ListGardenService
          farmId={farmInformation.id}
          farmInfo={farmInformation}
        />

        {/*List project */}
        <ListGarden farmId={farmInformation.id} />
      </ScrollView>
    </View>
  );
};

export default DetailFarmGrowVegetables;
