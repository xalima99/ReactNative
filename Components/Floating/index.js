import React, { useMemo } from "react";
import { Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { getTheme } from "./helper";

const index = ({
  right = 20,
  bottom = 20,
  onPress,
  icon = "plus",
  image,
  secondary,
  disabled,
}) => {
  const ContainerTheme = useMemo(() => getTheme(true, secondary, disabled), [
    secondary,
    disabled,
  ]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          backgroundColor: "#010273",
        },
        ...ContainerTheme,
        { right, bottom },
      ]}
    >
      {image ? (
        <Image
          source={image}
          style={{ tintColor: "#fff", height: 30, width: 30 }}
        />
      ) : (
        <MaterialCommunityIcons
          name={icon}
          color={secondary ? "#020191" : disabled ? "#CFCFCF" : "#fff"}
          size={35}
        />
      )}
    </TouchableOpacity>
  );
};

index.propTypes = {
  right: PropTypes.number,
  bottom: PropTypes.number,
  onPress: PropTypes.func,
  icon: PropTypes.string,
  image: PropTypes.any,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default index;
