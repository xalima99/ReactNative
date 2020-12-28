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
    fontWeight: "bold",
  },

  secondaryContainer: {
    backgroundColor: "#4976ba",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  Input: {
    flexDirection: "row",
    width:'75%',
    height:35,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    overflow: "hidden",
    backgroundColor: "#5C84C1",
    // opacity: 0.2,
    paddingLeft: 10,
    alignSelf:'center',
    borderRadius: 8,
  },
  Cancel: {
    flexDirection: "row",
    height: "100%",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  TextCancel: { color: "#fff", fontSize: 16, fontWeight: "600" },
  TextInput : {
    flex: 1,
    height: 35,
    color:'#fff',
    paddingLeft: 5,
    fontSize:16
  }
});
