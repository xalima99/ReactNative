import { StyleSheet } from "react-native";
import {ColorPallette} from '../../constants/Colors'


export default StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 200,

    backgroundColor: "#fff",
    position: "absolute",
    bottom:'10%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 8,
    // flexDirection:'row',
    alignItems: "center",
    
    overflow: "hidden",
  },
  inside: {
    minHeight: 48,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    //   alignItems: 'center',
    flexDirection: "row",
    paddingHorizontal:16
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
    paddingHorizontal:16,
  },
  title1: {
    fontSize: 16,
    minWidth:'100%',
    flexWrap:'wrap'
    // flex:1
  },
  content: {
    marginBottom: 16,
    paddingHorizontal: 16,
    width:'100%',
  }
});
