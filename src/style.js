import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formTitle:{
        fontSize:36,
        fontWeight:'bold',
        color:"#0a5c0a",
        margin:10,
    },
    formInput:{
        borderColor: 'black',
        borderWidth:1,
        borderRadius:10,
        fontSize:22,
        width:'80%',
        padding:10,
        margin:10,
    },
    formButton:{
        backgroundColor:"#0a5c0a",
        width:'80%',
        margin:10,
        padding:10,
        borderRadius:10,
        alignItems:'center',
    },
    textButton:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
    },
    subButton:{
        padding:10,
    },
    subTextButton:{
        color:"#0a5c0a",
    },
    //Telas Internas
    internalContainer:{
        flex:1,
        alignItems:'fleex-start',
        paddingTop:25,
    },
    topBar:{
        flexDirection:'row-reverse',
        padding:10,
        backgroundColor:"#0a5c0a",
        width:'100%',
        justifyContent:'space-between',
    },
    topBarButtonText:{
        color:'white',
        fontSize:20,
        fontWeight:'700',
    }

});