import { StyleSheet } from "react-native";
import { Cards } from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: "100%",
    height: 72,
    maxHeight: 72,
    padding: 16,
    fontSize: 16,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    paddingBottom: 16,
    width: 56,
    height: 54,
    maxHeight: 53,
    maxWidth: 56,
    resizeMode: "center",
    marginRight: 16,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    justifyContent: 'flex-start'
  },
  text: {},
});
