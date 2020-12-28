import React from "react";
import { View, Text } from "react-native";

const TextHolder = ({ children, style, secondary, large }) => {
  return (
    <View
      style={[{
        height: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: large ? 'flex-start' : 'center',
        paddingHorizontal: 16
      }]}
    >
      <Text style={style}>{children}</Text>
    </View>
  );
};

export default TextHolder;
