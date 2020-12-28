import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

const SSPtext = ({ children, style, font, multiline, numberOfLines }) => {
  let [fontsLoaded] = useFonts({
    SemiBold: require("../../../assets/fonts/SourceSansPro-SemiBold.ttf"),
    Regular: require("../../../assets/fonts/SourceSansPro-Regular.ttf"),
  });

  const loadFont = () => {
    if(font) return ({
      fontFamily: font 
    }) 
     return ({
      fontFamily: "SemiBold" || Platform.OS === 'ios' ? 'Helvetica' : 'Roboto'
    })
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <Text
        numberOfLines={numberOfLines}
        multiline={multiline}
        style={[
          { textAlign: "center" },
          style,
          loadFont(),
        ]}
      >
        {children && children}
      </Text>
    );
};

export default SSPtext;
