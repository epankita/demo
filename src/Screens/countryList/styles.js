import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    margin:10
    },
    scrollView: {
        marginHorizontal: 1,
        paddingVertical: 1,
        marginTop: 5,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cardContent: {
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },

    userList: {
        flex: 1,

    },
    card: {

        alignContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        margin: 10,
        backgroundColor: "white",
        padding: 10,
    },

    title: {
        fontSize: 15,
        flexBasis: '45%',
        color: "#fff",
        color: "#696969",
        fontWeight: 'bold',
        marginBottom: 5,
    },
    name: {
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'normal',
        color: "#008080",
        marginBottom: 5,
    },
});

export default styles