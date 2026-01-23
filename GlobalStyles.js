import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    linkButton: {
        fontSize: 14,
        textDecorationLine: 'underline',
        color: '#ffffffff',
    }
});