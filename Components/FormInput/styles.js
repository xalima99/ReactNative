import { StyleSheet } from "react-native";
import { ColorPallette } from "../../constants/Colors";

export default StyleSheet.create({
  input: {
    fontSize: 18,
    flex: 1,
  },
  inputContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    height: 48,
    maxHeight: 48,
    flexDirection:'row',
    justifyContent: "space-between",
    marginVertical:8
  },
  Label: {
    fontWeight: "bold",
    fontSize: 20,
    color: ColorPallette.UiDesign.DarkGray,
  },
  borderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 8,
  },
  icon: {
    width: 48,
    maxWidth: 48,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
