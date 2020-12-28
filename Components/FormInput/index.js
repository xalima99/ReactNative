import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Input from "./Input";
import Label from "./Label";
import { ColorPallette } from "../../constants/Colors";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Index = ({
  formvalue,
  setformValue,
  error,
  success,
  disabled,
  label,
  password,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.borderContainer}>
        <View>
          {label && (
            <Label
              style={{
                color: disabled ? "#D7D8D7" : ColorPallette.UiDesign.DarkGray,
              }}
              text={label}
            />
          )}
        </View>
        <View>
          {success && (
            <MaterialCommunityIcons
              name="check"
              color={ColorPallette.StatusIndicating.Malachite}
            />
          )}
        </View>
      </View>

      <Input
        password={password}
        disabled={disabled}
        value={formvalue}
        onChangeText={setformValue}
        style={{
          borderColor:
            error && !success
              ? ColorPallette.StatusIndicating.ShyTomato
              : success
              ? ColorPallette.StatusIndicating.Malachite
              : ColorPallette.UiDesign.Silver,
        }}
      />
      {error && (
        <View style={styles.borderContainer}>
          <Text style={{ color: ColorPallette.StatusIndicating.ShyTomato }}>
            {error}
          </Text>

          <Feather name="x" color={ColorPallette.StatusIndicating.ShyTomato} />
        </View>
      )}
    </View>
  );
};

Index.propTypes = {
  formvalue: PropTypes.string,
  setformValue: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  password: PropTypes.bool,
};

export default Index;
