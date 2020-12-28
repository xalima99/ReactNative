import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height:48,
        maxHeight:48
    },
    textContainer:{
        flexDirection: 'row',
        flex:.5,
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: 'white',
        marginRight:4
    },
    iconContainer:{
        flexDirection: 'row',
        flex:.5,
        justifyContent: 'space-around',
        alignItems:'center',
        backgroundColor: 'white',
        marginLeft:4
    }
})