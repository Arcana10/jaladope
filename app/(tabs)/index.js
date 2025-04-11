import { StatusBar, StyleSheet, Text, View } from "react-native";
import UserShortCut from "../../views/Home/UserShortCut";
import HomeCalendar from "../../components/ShortCuts/HomeCalendar";

export default function TabHome () {

    return (

        <>
        
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />

            <View style={home.box}>
                <UserShortCut/>
                <HomeCalendar/>
                <Text>Home</Text>
            </View>

        </>

    )

}

const home = StyleSheet.create({
    box: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 30,
        paddingHorizontal: 20,
    }
})