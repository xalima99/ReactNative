import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 500,
    width: "100%",
    // flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    height: 48,
    position: "relative",
    paddingVertical: 4,
    // paddingHorizontal: 8,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    borderColor: "#EDEDED",
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  item: {
    backgroundColor: "#fff",
    width: "100%",
    height: 48,
    position: "relative",
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500'
  },
  itemTextSelected: {
    color: "#0307A4",
  },
  textBox: {
    marginLeft: 8,
    minWidth: 48,
    flex: 1,
    height: 40,
    maxHeight: 40,
    justifyContent: "center",
    // backgroundColor: 'pink',
  },
  text: {
    fontSize: 18,
    color: "#9D9D9D",
  },
  selectText: {
    color: "#000",
  },
  iconBox: {
    width: 24,
    maxWidth: 24,
    height: 40,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: 'blue'
  },
  drop: {
    backgroundColor: "#fff",
    width: "100%",
    minWidth: "100%",
    minHeight: 48,
    maxHeight:200,
    position: "absolute",
    top: 4,
    borderRadius: 8,
    borderColor: "#EDEDED",
    borderWidth: 1,
    // zIndex: -10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: "hidden",
  },

  disabled: {
    backgroundColor: "#E6E5E6",
  },
});
