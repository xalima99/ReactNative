import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"; //heart-o bookmark-o share-social
import { Cards } from "../../../../../constants/Colors";
import PropTypes, { string } from "prop-types";

const IconCTA = ({ icon, onPress, isDefault }) => {
  const getComp = () => {
    if (icon === "like")
      return (
        <FontAwesome
          name="heart-o"
          size={20}
          color={isDefault ? 
            Cards.Complex.Default.Icon : Cards.Complex.Active.Icon}
        />
      );
    if (icon === "save")
      return (
        <FontAwesome
          name="bookmark-o"
          size={20}
          color={isDefault ? 
            Cards.Complex.Default.Icon : Cards.Complex.Active.Icon}
        />
      );
    if (icon === "share")
      return (
        <MaterialCommunityIcons
          name="share-variant"
          size={20}
          color={isDefault ? 
            Cards.Complex.Default.Icon : Cards.Complex.Active.Icon}
        />
      );
  };

  return <Pressable onPress={onPress}>{icon && getComp()}</Pressable>;
};

IconCTA.propTypes = {
  icon: PropTypes.oneOf(["like", "save", "share"]).isRequired,
  onPress: PropTypes.func,
};

export default IconCTA;
