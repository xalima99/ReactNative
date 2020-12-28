import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchResult = ({ result }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={result.onPress}>
      <View style={styles.inner}>
        <View style={styles.IconBox}>
          {result.icon && (
            <MaterialCommunityIcons
              name={result.icon}
              color="#5C84C1"
              size={25}
            />
          )}
        </View>
        <View style={styles.result}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 19,
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            {result.title}
          </Text>
          <Text numberOfLines={1} style={{}}>
            {result.subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inner: {
    flexDirection: "row",
  },
  IconBox: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    justifyContent: "center",
  },
});
