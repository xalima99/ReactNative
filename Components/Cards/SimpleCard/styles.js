import { StyleSheet } from "react-native";
import { Cards } from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    width: 120,
    maxWidth: 120,
    height: 130,
    maxHeight: 130,
    paddingHorizontal: 16,
    paddingTop: 24,
    fontSize: 16,
    paddingBottom: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom:5,
  },
  defaultText: {
    color: Cards.Simple.Default.Text,
  },
  defaultIcon: {
    tintColor: Cards.Simple.Default.Icon,
  },
  active: {
    backgroundColor: Cards.Simple.Active.BackGround,
  },
  activeText: {
    color: Cards.Simple.Active.Text,
  },
  activeIcon: {
    tintColor: Cards.Simple.Active.Icon,
  },
  icon: {
    marginBottom: 8,
    width: 56,
    height: 54,
    maxHeight: 53,
    maxWidth: 56,
    resizeMode: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});
