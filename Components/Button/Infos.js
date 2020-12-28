import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { ClearBackGround } from "../../constants/Colors";

const Infos = ({
  children,
  icon,
  iconColor,
  textStyles,
  secondary,
  outlined,
  isPressed,
}) => {
  return (
    <View style={styles.main}>
      {icon && (
        <Image
          style={[styles.icon, { tintColor: iconColor ? iconColor : "#fff" }]}
          source={icon}
        />
      )}

      <View>
        <Text
          style={[
            textStyles,
            {
              color:
                secondary && outlined && isPressed
                  ? ClearBackGround.Fills.Default
                  : textStyles[textStyles.length - 1].color,
            },
          ]}
        >
          {children}
        </Text>
      </View>
    </View>
  );
};

export default Infos;
