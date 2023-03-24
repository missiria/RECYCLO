import { StyleSheet  } from 'react-native';

export const style = StyleSheet.create({
    container: {
        marginLeft: 30,
        top: 100,
    },
    TextOne: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    TextTwo: {
        marginTop: 10,
        fontSize: 15,
        color: '#7C7C7C',
        borderBottomColor: '#000000',
        borderBottomWidth: 0.2,
        width: 270,
        marginBottom: 30,
        paddingBottom: 16,
    },

    // Select Lang Form
    ArabicChec: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ArabicChild: {
        color: 'black',
        fontSize: 17,
        marginTop: 10,
    },
    ButtonSelect: {
        marginTop: 310,
        textAlign: 'center',
    },
    TheButton: {
        position:'relative',
        backgroundColor: '#33CC66',
        padding: 15,
        color: 'white',
        borderRadius: 6,
        textAlign: 'center',
        alignSelf: 'center',
        position: 'relative',
        width:300,
        // top:90+'%' 

    }

});