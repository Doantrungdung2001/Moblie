import AsyncStorage from "@react-native-async-storage/async-storage";

const UserInfoAsyncStorage = {
  storeUser: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Error storing data:", error);
    }
  },

  getUserInfo: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error("Error get data:", error);
    }
  },

  clearUserInfo: () => {
    try {
      AsyncStorage.clear();
    } catch (error) {
      console.error("Error clear data:", error);
    }
  },
};
export default UserInfoAsyncStorage;
