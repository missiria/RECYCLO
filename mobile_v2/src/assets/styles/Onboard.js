import { StyleSheet  } from 'react-native';

export const style = StyleSheet.create({
    ImageStyle  : {
        width: "100%",
        resizeMode:"cover",
        height: 245,
    },  
 
    DescText : {
        textAlign: 'center',
        color: '#7C7C7C',
        fontSize: 17,
    },
    TitleText : {
        color: 'black',
        fontWeight:'bold',
        fontSize: 30,
        marginBottom:20,
        textAlign:'center',
        
    },
    ButtonSelect: {
        marginTop: 50,
        textAlign: 'center',
    },
    TheButton: {
        backgroundColor: '#33CC66',
        padding: 15,
        color: 'white',
        borderRadius: 6,
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
    }

});