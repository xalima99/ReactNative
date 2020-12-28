import React from "react";
import { View } from "react-native";
import styles from "./styles";
import TextHolder from "./TextHolder";
import IconHolder from "./IconHolder";
import { getTheme } from "./helper";
import PropTypes from "prop-types";

const Index = ({ secondary, leftIcons, rightIcons, children, text }) => {
  const { containerStyle, textStyle } = getTheme(secondary);

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View style={{ flexDirection: "row" }}>
          {leftIcons &&
            leftIcons.map((icon) => (
              <IconHolder
                key={icon.icon}
                icon={icon.icon}
                onPress={icon.onPress}
                secondary={secondary}
              />
            ))}
        </View>
        {text && <TextHolder style={textStyle}>{text}</TextHolder>}
        <View style={{ flexDirection: "row" }}>
          {rightIcons &&
            rightIcons.map((icon) => (
              <IconHolder
                key={icon.icon}
                icon={icon.icon}
                onPress={icon.onPress}
                secondary={secondary}
              />
            ))}
        </View>
      </View>
      {children && (
        <View style={[containerStyle, styles.textContainer]}>
          <TextHolder large style={textStyle}>
            {children}
          </TextHolder>
        </View>
      )}
    </>
  );
};

Index.propTypes = {
  secondary: PropTypes.bool,
  leftIcons: PropTypes.array,
  rightIcons: PropTypes.array,
  children: PropTypes.any,
  text: PropTypes.string, 
};

export default Index;
