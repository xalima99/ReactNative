import React, { useState } from "react";
import { View, Pressable, Image, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { Cards } from "../../../constants/Colors";

const SimpleCard = ({ text, icon, onPress }) => {
  const [isPressed, setisPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: isPressed
            ? Cards.Simple.Active.BackGround
            : "#E7ECF2",
        },
      ]}
      onPressOut={() => setisPressed(false)}
      onPressIn={() => setisPressed(true)}
    >
      {icon && (
        <View style={[styles.imageContainer]}>
          <Image
            source={icon}
            style={[
              styles.icon,
              {
                tintColor: isPressed
                  ? styles.activeIcon.tintColor
                  : styles.defaultIcon.tintColor,
              },
            ]}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text
          multiline={true}
          numberOfLines={2}
          font="Regular"
          style={{
            textAlign: "center",
            color: isPressed
              ? styles.activeText.color
              : styles.defaultText.color,
            fontSize: 15,
          }}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

SimpleCard.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  onPress: PropTypes.func,
};

export default SimpleCard;
