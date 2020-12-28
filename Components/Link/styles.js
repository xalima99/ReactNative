import { StyleSheet } from "react-native";
import { ColoredBackGround, ClearBackGround } from "../../constants/Colors";


const styles = StyleSheet.create({
  //container styles
  containerDefault: {
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 6,
    minHeight: 48,
    height: 48,
    backgroundColor: "transparent",
    marginVertical: 4
  },
  block: {
    width: "100%",
  },
  containerPrimary: {},
  containerPrimaryOutlined: {
    color: ColoredBackGround.Fills.Default,
  },
  containerSecondary: {},
  containerSecondaryOutlined: {
    color: ColoredBackGround.Fills.Disable,
  },

  containerDisabledPrimary: {
    color: ClearBackGround.Fills.OceanBlueLight,
  },
  containerDisabledSecondary: {
    color: ClearBackGround.Fills.OceanBlueLight,
  },
  containerDisabledOutlined: {
    color: ColoredBackGround.Fills.Disable,
  },
  //text Styles
  textDefault: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  textPrimary: {
    color: ClearBackGround.Fills.Default,
  },
  textPrimaryOutlined: {
    color: ColoredBackGround.Fills.Default,
  },
  textSecondary: {
    color: ColoredBackGround.TextAndIcon.Default,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: ColoredBackGround.TextAndIcon.Default,
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
    alignItems: "center"
  },
  prevIcon: {
    maxHeight: 20,
    paddingLeft: 16,
    maxWidth: 16,
    marginRight: 8,
  },
  nextIcon: {
    maxHeight: 20,
    paddingRight: 16,
    maxWidth: 16,
    marginLeft: 8,
  },
});

export default styles;
