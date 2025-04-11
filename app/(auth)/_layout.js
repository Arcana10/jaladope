import { ActivityIndicator, Pressable, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { borderRadius, colors, fontFamily, fontSize } from "../../themes/theme";
import { Link, router } from "expo-router";
import { IconUser, IconLock, IconLockOpen } from "@tabler/icons-react-native";
import { useState } from "react";
import { useUI } from "../../context/UI/UIContext";
import { useAuth } from "../../context/Auth/AuthContext";

export default function AuthLayout () {

    const { contextShowToast } = useUI();
    const { contextLogin } = useAuth();

    const [ entryUser, setEntryUser ] = useState({
        userId: '',
        userPwD: ''
    })
    const [ viewPassword, setViewPassword ] = useState(true);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleLogin = async () => {

        try {
            
            setIsLoading(true);

            if (entryUser.userId === '' || entryUser.userPwD === '') {
                contextShowToast('Por favor, ingresa tu ID de alumno y contraseña de alumno.')
                return;
            }

            const data = await contextLogin(entryUser.userId, entryUser.userPwD)

            if (data.ok) {
                contextShowToast(data.message)
                router.push('/(tabs)')
            } else {
                contextShowToast(data.message)
            }

        } catch (error) {
            contextShowToast(error.message)
        } finally {
            setIsLoading(false)
        }

    }

    return (

        <>
        
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />

            <SafeAreaView style={app.content}>

                <View style={header.content}>
                    <Text style={header.title}>Iniciar Sesión</Text>
                    <Text style={header.subtext}>Ingresa tus credenciales para disfrutar de todas las herramientas disponibles.</Text>
                </View>

                <View style={body.content}>

                    <View style={body.card}>

                        <View style={body.formGroup}>
                            <Text style={body.label}>Ingresa tu ID de alumno:</Text>
                            <View style={body.formControl}>
                                <TextInput style={body.entry} placeholder="Ingresa tu ID de alumno" keyboardType="numeric" maxLength={8} onChangeText={(text) => setEntryUser(prev => ({ ...prev, userId: text }))} />
                                <View style={body.icon}><IconUser size={18} stroke={'#333333'} strokeWidth={1.5} /></View>
                            </View>
                        </View>
                        <View style={body.formGroup}>
                            <Text style={body.label}>Ingresa tu contraseña de alumno:</Text>
                            <View style={body.formControl}>
                                <TextInput style={body.entry} placeholder="Ingresa tu contraseña de alumno" keyboardType="numeric" maxLength={8} secureTextEntry={viewPassword} onChangeText={(text) => setEntryUser(prev => ({ ...prev, userPwD: text }))} />
                                <Pressable style={body.icon} onPress={() => setViewPassword(!viewPassword)}>
                                    {!viewPassword ? <IconLockOpen size={18} stroke={'#333333'} strokeWidth={1.5} /> : <IconLock size={18} stroke={'#333333'} strokeWidth={1.5} />}
                                </Pressable>
                                <Text style={[body.label, body.recovery]}>¿Olvidaste tu contraseña?</Text>
                            </View>
                        </View>
                        <View style={body.formGroup}>
                            <Pressable style={body.btn} onPress={handleLogin}>
                                {isLoading ? (
                                    <ActivityIndicator size={"small"} color={'#FFFFFF'} />
                                ) : (
                                    <Text style={body.btnTxt}>Ingresar</Text>
                                )}
                            </Pressable>
                        </View>

                    </View>

                </View>

                <View style={footer.content}>
                    <Text style={footer.subtext}>Al continuar aceptas nuestros <Link href={'/'} style={footer.link}>Términos y Condiciones</Link>, <Link href={'/'} style={footer.link}>Política de Privacidad</Link> y <Link href={'/'} style={footer.link}>Política de Publicidad</Link>.</Text>
                </View>

            </SafeAreaView>

        </>

    )

}

const app = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})

const header = StyleSheet.create({
    content: {
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginBottom: 10,
        fontSize: fontSize.header,
        fontFamily: fontFamily.bold,
    },
    subtext: {
        color: colors.gray,
        textAlign: 'center',
        fontSize: fontSize.normal,
        fontFamily: fontFamily.normal,
    }
})

const body = StyleSheet.create({
    content: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        paddingVertical: 20,
    },
    formGroup: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        marginBottom: 8,
        color: colors.gray,
        fontSize: fontSize.small,
        fontFamily: fontFamily.normal,
    },
    formControl: {
        position: 'relative',
        width: '100%',
    },
    entry: {
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        fontSize: fontSize.small,
        fontFamily: fontFamily.normal,
        backgroundColor: colors.lightGray,
        borderRadius: borderRadius.medium,
    },
    icon: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    recovery: {
        marginVertical: 5,
        textAlign: 'right',
        color: colors.primary,
    },
    btn: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: borderRadius.medium,
    },
    btnTxt: {
        color: colors.white,
        fontSize: fontSize.normal,
        fontFamily: fontFamily.medium,
    }
})

const footer = StyleSheet.create({
    content: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.lightGray,
    },
    subtext: {
        color: colors.gray,
        textAlign: 'center',
        fontSize: fontSize.small,
        fontFamily: fontFamily.normal,
    },
    link: {
        color: colors.primary,
        fontFamily: fontFamily.medium,
    }
})