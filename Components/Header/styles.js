import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    height: hp(7),
    width: wp(100),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    height: hp(7),
    width: wp(100),
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  block: {
    width: wp(15),
    maxWidth: wp(15),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  primaryContainer: {
    backgroundColor: "#fff",
  },
  primaryText: {
    color: "#333",
    fontSize: 26,
    fontWeight:'bold'
  },

  secondaryContainer: {
    backgroundColor: "#4976ba",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 26,
    fontWeight:'bold'
  },
});
