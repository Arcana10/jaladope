import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { serviceAuthenticated, serviceLogin } from "../../service/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ isAuth, setIsAuth ] = useState(false);
    const [ isUser, setIsUser ] = useState([]);

    const contextAuthenticated = async (token) => {
        try {
            
            const data = await serviceAuthenticated(token);
            
            if (data.ok){
                setIsUser(data.user)
                return { ok: true, msg: data.message }
            } else {
                return { ok: false, msg: data.message };
            }

        } catch (error) {
            return { ok: false, msg: error.message };
        }
    }

    const contextLogin = async (userId, userPw) => {

        try {

            const formData = {
                userId: userId,
                userPassword: userPw
            };

            const data = await serviceLogin(formData);
            if (data) {
                const user = await contextAuthenticated(data.user);
                if (user.ok) {
                    setIsAuth(true);
                    setIsUser(user.user); // Aquí seteas todo el objeto del usuario autenticado
                    await AsyncStorage.setItem('user_jaladope', JSON.stringify(data.user))
                    return { ok: true, message: 'Inicio de sesión exitoso.'};
                } else {
                    setIsAuth(false);
                    setIsUser([]);
                }
                
            } else {
                return { ok: false, message: 'No se pudo iniciar sesión correctamente.' };
            }

        } catch (error) {
            return { ok: false, message: error.message };
        }
    }

    const contextLogout = async () => {
        try {
            await AsyncStorage.removeItem('user_jaladope');
            setIsAuth(false);
            setIsUser([]);
            router.replace('/(auth)')
        } catch (error) {
            return { ok: false, message: error.message };
        }
    }

    useEffect(() => {

        const contextCheckLogin = async () => {
            const user = await AsyncStorage.getItem('user_jaladope');
            if (user) {
                const parsed = JSON.parse(user);
                const info = await contextAuthenticated(parsed);

                if (info.ok){
                    setIsAuth(true);
                    setIsUser(JSON.parse(info.user));
                    router.push('/(tabs)')
                } else {
                    setIsAuth(false);
                    setIsUser([]);
                }
            } else {
                setIsAuth(false);
                setIsUser([]);
            }
        }

        contextCheckLogin();

    }, [])

    const contextValue = {
        isAuth,
        isUser,
        contextLogin,
        contextLogout
    }

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);