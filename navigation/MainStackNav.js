import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const MainSTackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default MainSTackNav;
