import React, { useState } from "react";
import { TextInput, View, Pressable } from "react-native";
import styles from "./styles";
import { ColorPallette } from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Input = ({ value, onChangeText, style, disabled, password }) => {
  const [viewable, setviewable] = useState(password);

  return (
    <View
      style={[
        styles.inputContainer,
        style,
        { backgroundColor: disabled ? "#FAFAFA" : "#FFF" },
      ]}
    >
      <TextInput
        secureTextEntry={viewable}
        editable={!disabled}
        style={[
          styles.input,
          { color: disabled ? "#D7D8D7" : ColorPallette.UiDesign.DarkGray },
        ]}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      {password && (
        <Pressable onPress={() => setviewable(!viewable)} disabled={disabled}>
          <View style={styles.icon}>
            <FontAwesome
              name={viewable ? "eye" : "eye-slash"}
              size={25}
              color={disabled ? "#D7D8D7" : ColorPallette.core.AXABlue}
            />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default Input;
