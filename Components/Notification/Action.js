import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {ColorPallette} from '../../constants/Colors'

const Action = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[{textTransform:'uppercase', color: '#020191', fontSize:16}, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Action;