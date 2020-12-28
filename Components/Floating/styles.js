import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 65,
    padding: 16,
    width: 65,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020191",
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  secondary: {
    backgroundColor: "#fff",
  },
  primaryDisabled: {
    backgroundColor: "#E5E5E5",
  },
  iconColor: {
    tintColor: "#fff",
  },
  cont: {
    height: "100%",
    width: "100%",
  },
});
