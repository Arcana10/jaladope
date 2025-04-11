import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../context/Auth/AuthContext";
import { UIProvider } from "../context/UI/UIContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout () {

    const [ fontLoaded ] = useFonts({
        Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
        MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
        MontserratMedium: require("../assets/fonts/Montserrat-Medium.ttf"),
        MontserratSemi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
        MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    })


    useEffect(() => {
        if (fontLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontLoaded])

    if (!fontLoaded) return null;

    return (

        <>

            <UIProvider>
            
                <AuthProvider>
            
                    <RedirectToAccount/>
            
                </AuthProvider>
            
            </UIProvider>
        
        </>

    )

} 

const RedirectToAccount = () => {

    const { isAuth } = useAuth();

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name={!isAuth ? '(auth)' : '(tabs)'} />
        </Stack>
    )

}