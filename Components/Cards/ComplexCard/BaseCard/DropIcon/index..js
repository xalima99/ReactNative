import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Cards } from "../../../../../constants/Colors";

const DropIcon = ({ onPress, isDefault,expand }) => {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons
        name={`expand-${expand}`}
        size={30}
        color={
          isDefault ? Cards.Complex.Default.Icon : Cards.Complex.Active.Icon
        }
      />
    </Pressable>
  );
};

DropIcon.propTypes = {
  onPress: PropTypes.func,
  isDefault: PropTypes.bool,
};

DropIcon.defaultProps = {
  isDefault: true,
};

export default DropIcon;
