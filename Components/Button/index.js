import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pressable } from "react-native";
import { getStyles, requiredPropsCheck, getPressedStateColor } from "./helpers";
import Infos from "./Infos";

class Button extends Component {
  static defaultProps = {
    outlined: false,
    disabled: false,
    block: false,
  };

  state = {
    isPressed: false,
  };

  render() {
    const {
      children,
      onPress,
      disabled,
      outlined,
      secondary,
      block,
      primary,
      icon,
      iconColor,
      link,
      style,
    } = this.props;
    const { containerStyles, textStyles } = getStyles({
      block,
      outlined,
      disabled,
      primary,
      secondary,
      link,
    });

    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        onPressIn={() => {
          this.setState({ isPressed: true });
        }}
        onPressOut={() => {
          this.setState({ isPressed: false });
        }}
        style={({ pressed }) => {
          return [
            containerStyles,
            {
              backgroundColor: pressed
                ? getPressedStateColor(primary, secondary, outlined, disabled,link)
                : containerStyles[containerStyles.length - 1].backgroundColor,
            },
            style
          ];
        }}
      >
        <Infos
          children={children}
          icon={icon}
          iconColor={iconColor}
          textStyles={textStyles}
          secondary={secondary}
          outlined={outlined}
          isPressed={this.state.isPressed}
        />
      </Pressable>
    );
  }
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onPress: PropTypes.func,
  outlined: PropTypes.bool,
  icon: PropTypes.any,
  iconColor: PropTypes.string,
  block: PropTypes.bool,
  primary: requiredPropsCheck,
  secondary: requiredPropsCheck,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  style: PropTypes.any
};

export default Button;
