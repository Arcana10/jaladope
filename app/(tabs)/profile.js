import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../themes/theme";
import { useAuth } from "../../context/Auth/AuthContext";

export default function TabProfile () {

    const { contextLogout } = useAuth();

    const handleLogout = () => contextLogout();

    return (

        <>
        
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
            <SafeAreaView>
                <Text>Perfil</Text>
                <Pressable style={styles.button} onPress={() => handleLogout()}><Text style={{ color: colors.white }}>Logout</Text></Pressable>
            </SafeAreaView>

        </>

    )

}

const styles = StyleSheet.create({
    button: {
        width: '60%',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: colors.primary,
    }
})