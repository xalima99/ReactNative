import React, { useState, useCallback } from "react";
import { View, Text, Pressable, LayoutAnimation } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { ColorPallette } from "../../constants/Colors";
import Action from "./Action";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Index = ({
  text,
  leftIcon,
  title,
  subTitle,
  warning,
  success,
  action1,
  action2,
  onAction1,
  onAction2,
  onIconPress,
  secondary = false,
}) => {
  const [hide, sethide] = useState(false);
  const [expanded, setexpanded] = useState(false);
  const expand = useCallback(() => {
    setexpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [expanded, setexpanded]);

  const onHide = useCallback(() => {
    sethide(true);
  }, [hide, sethide]);

  if (hide) return <View></View>;

  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: 1.5,
          borderColor: warning
            ? ColorPallette.StatusIndicating.ShyTomato
            : success
            ? ColorPallette.StatusIndicating.Malachite
            : "transparent",
          backgroundColor: secondary ? "#4976BB" : "#fff",
        },
      ]}
    >
      <View style={[styles.inside]}>
        <View style={styles.left}>
          {leftIcon && (
            <Pressable onPress={onIconPress}>
              <MaterialCommunityIcons
                name={leftIcon}
                size={25}
                style={{ position: "relative" }}
                color={secondary ? "#fff" : ColorPallette.UiDesign.DarkGray}
              />
            </Pressable>
          )}

          <View style={{ height: "100%", alignItems: "center" }}>
            <Text
              style={[
                styles.title,
                { color: secondary ? "#fff" : ColorPallette.UiDesign.DarkGray },
              ]}
            >
              {title}
            </Text>
            {subTitle && (
              <Text
                style={{
                  ccolor: secondary ? "#fff" : ColorPallette.UiDesign.DarkGray,
                }}
              >
                {subTitle}
              </Text>
            )}
          </View>
        </View>

        {!text ? (
          <Pressable onPress={onHide}>
            <MaterialCommunityIcons
              name="close"
              size={25}
              style={{ paddingHorizontal: 16 }}
              color={secondary ? "#fff" : "#020191"}
            />
          </Pressable>
        ) : (
          <Pressable onPress={expand}>
            {!expanded ? (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                style={{ paddingHorizontal: 16 }}
                color={secondary ? "#fff" : "#020191"}
              />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-up"
                size={25}
                style={{ paddingHorizontal: 16 }}
                color={secondary ? "#fff" : ColorPallette.UiDesign.DarkGray}
              />
            )}
          </Pressable>
        )}
      </View>
      {text && expanded && (
        <>
          <View style={styles.content}>
            <Text
              numberOfLines={3}
              style={[
                styles.title1,
                { color: secondary ? "#fff" : ColorPallette.UiDesign.DarkGray },
              ]}
            >
              {text}
            </Text>
          </View>

          <View
            style={{
              height: text ? 48 : 0,
              width: "100%",
              paddingRight: 16,
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
              {action1 && (
                <View style={{ marginRight: 24 }}>
                  <Action
                    onPress={onAction1}
                    style={{ color: secondary ? "#fff" : "#020191" }}
                  >
                    {action1}
                  </Action>
                </View>
              )}

              {action2 ? (
                <View style={{ marginRight: 5 }}>
                  <Action
                    onPress={onAction2}
                    style={{ color: secondary ? "#fff" : "#020191" }}
                  >
                    {action2}
                  </Action>
                </View>
              ) : (
                <View style={{ marginRight: 5 }}>
                  <Action
                    onPress={onHide}
                    style={{ color: secondary ? "#fff" : "#020191" }}
                  >
                    CLOSE
                  </Action>
                </View>
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};

Index.propTypes = {
  text: PropTypes.string,
  leftIcon: PropTypes.oneOf([
    "bell",
    "alert",
    "email",
    " alert-circle-outline ",
    "check",
  ]),
  onIconPress: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  action1: PropTypes.string,
  action2: PropTypes.string,
  onAction1: PropTypes.func,
  onAction2: PropTypes.func,
  secondary: PropTypes.bool,
};

export default Index;
