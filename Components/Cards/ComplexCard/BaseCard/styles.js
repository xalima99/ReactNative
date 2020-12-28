import { StyleSheet } from "react-native";
import { Cards } from "../../../../constants/Colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Cards.Complex.Default.BackGround,
    overflow: "hidden",
    borderRadius: 8,
    marginVertical: 4,
  },
  contentContainer: {
    padding: 16,
    alignItems: "center",
    width:"100%"
  },
  HeadContainer:{
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  DropBox:{
    width:48,
    maxWidth:48,
    height: 48,
    maxHeight: 48,
    // backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TitleContainer: {
    flex: 1,
    height: 48,
    maxHeight: 48,
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: "blue",
  },
});
