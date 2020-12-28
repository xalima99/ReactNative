import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { Cards } from "../../../../../constants/Colors";

const TextContent = ({ children, isDefault, numberLines }) => {
  return (
    <View style={styles.TextContainer}>
      <Text
        multiline={true}
        numberOfLines={numberLines}
        style={{
          fontSize: 16,
          paddingRight: 10,
          textAlign: "left",
          color: isDefault
            ? Cards.Complex.Default.Text
            : Cards.Complex.Active.Text,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

TextContent.propTypes = {
  children: PropTypes.any.isRequired,
  isDefault: PropTypes.bool,
  numberLines: PropTypes.number,
};

TextContent.defaultProps = {
  isDefault: true,
  numberLines: 3,
};

export default TextContent;

const styles = StyleSheet.create({
  TextContainer: {
    maxWidth: "100%",
    width: "100%",
    marginBottom: 8,
    // paddingRight: 5,
  },
});
