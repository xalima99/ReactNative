import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons"; //heart-o bookmark-o share-social
import SSPtext from "../../../../Common/SSPText";
import { Cards } from "../../../../../constants/Colors";

const TextCTA = ({ children, onPress, isDefault }) => {
  return (
    <Pressable onPress={onPress}>
      {children && (
        <View>
          <Text
            font="Regular"
            style={{
              color: isDefault
                ? Cards.Complex.Default.Icon
                : Cards.Complex.Active.Icon,
              fontSize: 16,
            }}
          >
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default TextCTA;
