import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchResult from "./SearchResult";
import { ColorPallette } from "../../constants/Colors";

const SearchList = ({ results, name }) => {
  return (
    <View>
      {name && (
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            padding: 16,
            color: ColorPallette.UiDesign.DarkGray,
          }}
        >
          {name}
        </Text>
      )}
      {results &&
        results.map((result, k) => <SearchResult key={k} result={result} />)}
    </View>
  );
};

export default SearchList;
