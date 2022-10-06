import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding:20
    },
    titletext:
    {
        // fontFamily: 'nunito-bold',
        fontSize: 20,
        color: '#333'
    },
    subtitletext:
    {
        // fontFamily: 'nunito-regular',
        fontSize: 16,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        marginTop:'75%',
        flex:1,
        backgroundColor: "white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width:'100%',
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      modalClose:
      {
        // marginTop: -30,
        // marginBottom: 40,
        alignSelf: 'flex-end',
      }
})