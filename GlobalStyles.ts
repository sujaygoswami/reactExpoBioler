import { StyleSheet, Platform } from 'react-native';

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
    },
    safeAreaGlobalHeader: {
        backgroundColor: '#fff', // Global header background color
        // Add shadow for a "native" feel
        ...Platform.select({
            ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
            android: { elevation: 4 },
            default: { borderBottomWidth: 0, borderBottomColor: 'transparent', }
        }),
    },
    headerContainer: {
        height: 60, // FIXED HEIGHT FOR ALL DEVICES
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    logo: {
        width: 40, // Adjust based on your logo size
        height: 40
    },
    AppImageCard: {
        backgroundColor: '#fff',
        paddingBottom: 50,
    },
    TrendingImageListingWrap: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    PaddingAllDefault:{
        padding: 20,
    },
    PaddingBottomDefault:{
        paddingBottom: 20,
    },
    GlobalGridRow:{
        marginLeft: -10,
        marginRight: -10,
    },
    GlobalGridCol:{
        marginLeft: 10,
        marginRight: 10,
    },
    GridCol3:{
        width: 30,
    },

    
});