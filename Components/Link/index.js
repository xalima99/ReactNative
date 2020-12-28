import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Pressable, Image, Text } from "react-native";
import { getStyles, requiredPropsCheck, getTextColor } from "./helpers";
import styles from "./styles";
import SSPText from "../Common/SSPText";

class Link extends Component {
  static defaultProps = {
    visited: false,
    block: false,
    light: false,
  };

  state = {
    isPressed: false,
  };

  render() {
    const {
      children,
      onPress,
      visited,
      light,
      secondary,
      block,
      primary,
      prevIcon,
      nextIcon,
      style,
      font,
    } = this.props;
    const { containerStyles, textStyles } = getStyles({
      block,
      light,
      visited,
      primary,
      secondary,
    });

    return (
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          this.setState({ isPressed: true });
        }}
        onPressOut={() => {
          this.setState({ isPressed: false });
        }}
        style={style}
      >
        <View style={styles.main}>
          {prevIcon && (
            <Image
              style={[
                styles.prevIcon,
                {
                  tintColor: this.state.isPressed
                    ? getTextColor(
                        this.state.isPressed,
                        primary,
                        secondary,
                        light
                      )
                    : textStyles[textStyles.length - 1].color,
                },
              ]}
              source={prevIcon}
            />
          )}

          <Text
            font={font}
            style={[
              textStyles,
              {
                color: this.state.isPressed
                  ? getTextColor(
                      this.state.isPressed,
                      primary,
                      secondary,
                      light
                    )
                  : textStyles[textStyles.length - 1].color,
                textDecorationColor: this.state.isPressed
                  ? getTextColor(
                      this.state.isPressed,
                      primary,
                      secondary,
                      light
                    )
                  : textStyles[textStyles.length - 1].color,
              },
            ]}
          >
            {children && children}
          </Text>
          {nextIcon && (
            <Image
              style={[
                styles.nextIcon,
                {
                  tintColor: this.state.isPressed
                    ? getTextColor(
                        this.state.isPressed,
                        primary,
                        secondary,
                        light
                      )
                    : textStyles[textStyles.length - 1].color,
                },
              ]}
              source={nextIcon}
            />
          )}
        </View>
      </Pressable>
    );
  }
}

Link.propTypes = {
  children: PropTypes.any.isRequired,
  onPress: PropTypes.func,
  light: PropTypes.bool,
  prevIcon: PropTypes.any,
  nextIcon: PropTypes.any,
  iconColor: PropTypes.string,
  block: PropTypes.bool,
  primary: requiredPropsCheck,
  secondary: requiredPropsCheck,
  visited: PropTypes.bool,
  style: PropTypes.any,
};

export default Link;
