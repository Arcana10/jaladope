import { createContext, useContext, useState, useEffect } from "react";
import { users } from "../../db/user/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [ isAuth, setIsAuth ] = useState(false);
    const [ isUser, setIsUser ] = useState([]);

    const contextLogin = async (userId, userPw) => {
        try {
            const user = users.find((u) => u.userId === userId && u.userId === userPw);
            
            if (!user) {
                throw new Error('Credenciales inválidas.');
            }

            if (user) {
                setIsAuth(true);
                setIsUser(user); // Aquí seteas todo el objeto del usuario autenticado
                await AsyncStorage.setItem('user_jaladope', JSON.stringify(user))
                return { ok:true, message: 'Inicio de sesión exitoso.'};
            } else {
                return { ok: false, message: 'No se pudo iniciar sesión correctamente.' };
            }

        } catch (error) {
            return { ok: false, message: error.message };
        }
    }

    useEffect(() => {

        const contextCheckLogin = async () => {
            const user = await AsyncStorage.getItem('user_jaladope');
            if (user) {
                setIsAuth(true);
                setIsUser(JSON.parse(user));
                router.push('/(tabs)')
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
    }

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);