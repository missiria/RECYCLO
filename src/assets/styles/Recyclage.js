import { StyleSheet  } from 'react-native';

export const style = StyleSheet.create({
    containerImage : {
        marginTop : 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    ImageStyle  : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        resizeMode: 'contain' ,
    },    
    BoxText : {
        marginBottom: 50,

    },
    DescText : {
        textAlign: 'center',
        color: '#7C7C7C',
        fontSize: 17,
        marginLeft: 20,
        paddingRight: 20,

    },
    TitleText : {
        color: 'black',
        fontWeight:'bold',
        fontSize: 30,
        marginBottom:20,
        textAlign:'center',
        
    },

    TheButton: {
        backgroundColor: '#33CC66',
        padding: 15,
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    // Styling The Lines
    Lines : {
        marginTop : 50,
        flexDirection: 'row',
        justifyContent: 'center',
        flex:1,
        marginBottom:50,
    },
    Line1 : {
        backgroundColor: '#33CC66',
        height: 6,
        width: 55,
        textAlign: 'center',
        marginLeft: 10,
        borderRadius: 10,
    },
    EmptyLine : {
        backgroundColor: '#ECECEC',
        height: 6,
        width: 35,
        textAlign: 'center',
        marginLeft: 10,
        borderRadius: 10,
    }


});