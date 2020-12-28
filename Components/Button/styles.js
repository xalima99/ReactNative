import { StyleSheet } from "react-native";
import { ColoredBackGround, ClearBackGround } from "../../constants/Colors";

const styles = StyleSheet.create({
  //container styles
  containerDefault: {
    alignItems: "center",
    justifyContent: "center",
    // alignSelf: 'center',
    paddingHorizontal: 16,
    borderRadius: 6,
    minHeight: 48,
    height: 48,
    marginVertical: 4,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: .3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.44,

    elevation: 0,
  },
  block: {
    minWidth: "100%",
  },
  containerPrimary: {
    backgroundColor: ClearBackGround.Fills.Default,
    borderColor: ClearBackGround.Fills.Default,
  },
  containerPrimaryOutlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    color: ClearBackGround.Fills.Default,
  },
  containerSecondary: {
    backgroundColor: ColoredBackGround.Fills.Default,
    borderColor: ColoredBackGround.Fills.Default,
  },
  containerSecondaryOutlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    // borderColor: ClearBackGround.Fills.Default,
  },

  containerDisabledPrimary: {
    backgroundColor: ClearBackGround.Fills.Disable,
    borderColor: ClearBackGround.Fills.Disable,
  },
  containerDisabledSecondary: {
    backgroundColor: ColoredBackGround.Fills.Disable,
    borderColor: ColoredBackGround.Fills.Disable,
  },
  containerDisabledOutlined: {
    borderColor: ColoredBackGround.Fills.Disable,
    backgroundColor: "transparent",
  },
  link: {
    borderWidth: 0,
  },
  linkPrimary: {
    borderWidth: 0,
    color: ClearBackGround.Fills.Default,
  },
  //text Styles
  textDefault: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    // alignSelf: 'center'
  },
  textPrimary: {
    color: ClearBackGround.TextAndIcon.Default,
  },
  textPrimaryOutlined: {
    color: ClearBackGround.Fills.Default,
  },
  textSecondary: {
    color: ColoredBackGround.TextAndIcon.Default,
  },
  textSecondaryOutlined: {
    color: ColoredBackGround.Fills.Default,
  },
  textDisabledPrimary: {
    color: ClearBackGround.TextAndIcon.Disable,
  },
  textDisabledSecondary: {
    color: ClearBackGround.TextAndIcon.Disable,
  },
  textDisableOutlined: {
    color: ColoredBackGround.TextAndIcon.Disable,
  },

  //Container
  main: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    maxHeight: 20,
    paddingLeft: 16,
    maxWidth: 16,
    marginRight: 8,
  },
});

export default styles;
