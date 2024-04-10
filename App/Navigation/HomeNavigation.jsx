import React from "react";
import Home from "../Screens/HomeScreen/Home";
import { createStackNavigator } from "@react-navigation/stack";
import GrowVegetables from "../Screens/ServiceScreen/GrowVegetables/GrowVegetables";
import Internet from "../Screens/ServiceScreen/Internet/Internet";
import Bill from "../Screens/ServiceScreen/Bill/Bill";
import More from "../Screens/ServiceScreen/More/More";
import Wallet from "../Screens/ServiceScreen/Wallet/Wallet";
import DetailFarmGrowVegetables from "../Screens/ServiceScreen/GrowVegetables/DetailFarmGrowVegetables";
import DetailInfoService from "../Screens/ServiceScreen/GrowVegetables/DetailInfoService";
import SelectVegetables from "../Screens/ServiceScreen/GrowVegetables/SelectVegetables";
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="service-screen/Transfer" component={GrowVegetables} />
      <Stack.Screen name="service-screen/Internet" component={Internet} />
      <Stack.Screen name="service-screen/Wallet" component={Wallet} />
      <Stack.Screen name="service-screen/Bill" component={Bill} />
      <Stack.Screen name="service-screen/More" component={More} />
      <Stack.Screen name="farm-detail" component={DetailFarmGrowVegetables} />
      <Stack.Screen name="service-detail" component={DetailInfoService} />
      <Stack.Screen name="select-vegestables" component={SelectVegetables} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
