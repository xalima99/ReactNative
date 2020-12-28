import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getTheme } from "./helper";

const IconHolder = ({ icon, style, secondary, onPress }) => {
  const { textStyle, iconStyle } = getTheme(secondary);

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.block]}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={secondary ? "#fff" : "#CDCDCD"}
        />
      </View>
    </Pressable>
  );
};

IconHolder.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default IconHolder;
