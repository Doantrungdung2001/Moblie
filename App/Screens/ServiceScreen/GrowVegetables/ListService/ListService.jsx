import { FlatList, Image, StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import Heading from "../../../../Components/Heading/Heading";
import { COLORS } from "../../../../Constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./ListService.Styles";
const data = [
  {
    id: 1,
    name: "Combo1",
    image: "https://bloganchoi.com/wp-content/uploads/2021/03/rau-cu.jpg",
  },
  {
    id: 2,
    name: "Combo2",
    image:
      "https://media.doisongvietnam.vn/u/rootimage/editor/2017/08/22/12/22/w825/11503357754_5582.jpg",
  },
  {
    id: 3,
    name: "Combo3",
    image:
      "https://giamcanthai.com/wp-content/uploads/2018/02/rau-cu-qua-1.jpg",
  },
  {
    id: 1,
    name: "Combo4",
    image:
      "http://favri.org.vn/images/anh_tin_tuc/Rau_duoc_chia_lam_2_loai.jpg",
  },
];

const ListService = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Heading text={"Dịch vụ trồng rau"} />

      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.container} key={index}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.buttonBtn}>
                <Button
                  onPress={() =>
                    navigation.push("service-detail", { serviceInfo: item })
                  }
                  title="Chi tiết"
                  color={COLORS.white}
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListService;

