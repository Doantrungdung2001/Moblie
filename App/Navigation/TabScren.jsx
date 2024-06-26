import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


// import Scan from "../Screens/ScanScreen/Scan";
import HomeNavigation from "./HomeNavigation";
import UserNavigation from "./UserNavigation";
import SearchNavigation from "./SearchNavigation";

import { COLORS } from "../Constants";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 0,
          }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItemsL: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary,
            ...StyleSheet.shadow,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const TabScren = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLable: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.green,
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Trang chủ
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Quét mã
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-sharp" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="SearchNavigation"
        component={SearchNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Tìm kiếm cây trồng
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProflieUser"
        component={UserNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 14, marginTop: -7 }}>
              Tôi
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          // tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabScren;
