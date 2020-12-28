import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { getTheme } from "./helper";
import PropTypes from "prop-types";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Index = ({ secondary, children }) => {
  const { containerStyle, textStyle } = getTheme(secondary);
  const [recording, setrecording] = useState(false);

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.Input]}>
          <MaterialCommunityIcons name="magnify" color="#fff" size={23} />
          <TextInput style={styles.TextInput} />
          {recording ? (
            <MaterialCommunityIcons name="microphone" color="#fff" size={23} />
          ) : (
            <MaterialCommunityIcons
              name="microphone-outline"
              color="#fff"
              size={23}
            />
          )}
        </View>

        <TouchableOpacity style={styles.Cancel}>
          <Text style={[styles.TextCancel]}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ flex: 1, minWidth: "100%", backgroundColor: "#fff" }}
      >
        {children}
      </ScrollView>
    </>
  );
};

Index.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.any,
  name: PropTypes.string,
};

export default Index;
