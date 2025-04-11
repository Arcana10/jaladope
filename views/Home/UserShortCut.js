import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { borderRadius, colors, fontFamily, fontSize } from "../../themes/theme";
import { useAuth } from "../../context/Auth/AuthContext";
import HomeShortCut from "../../components/ShortCuts/HomeShortCut";

export default function UserShortCut () {

    const { isUser } = useAuth();

    console.log(isUser);

    return (

        <View style={userbox.box}>

            <View style={userbox.boxAvatar}>
                <View style={userbox.avatar}>
                    <Image source={{uri: `https://avatar.iran.liara.run/public/boy`}} style={{width: '100%', height: '100%'}} />
                </View>
            </View>

            <View style={userbox.info}>
                <Text style={userbox.name}>{isUser.name} {isUser.lastName}</Text>
                <Text style={userbox.grade}>"{isUser.grade} {isUser.section}"</Text>
            </View>

            <View style={userbox.shortcut}>
                <HomeShortCut/>
            </View>

            <View style={userbox.ranking}>
                <View style={userbox.rankingItem}>
                    <Text style={[userbox.rankingText, userbox.rankingTextTitle]}>17</Text>
                    <Text style={[userbox.rankingText, userbox.rankingTextSmall]}>Nota Final</Text>
                </View>
                <View style={userbox.rankingItem}>
                    <Text style={[userbox.rankingText, userbox.rankingTextTitle]}>A</Text>
                    <Text style={[userbox.rankingText, userbox.rankingTextSmall]}>Conducta</Text>
                </View>
                <View style={userbox.rankingItem}>
                    <Text style={[userbox.rankingText, userbox.rankingTextTitle]}>8</Text>
                    <Text style={[userbox.rankingText, userbox.rankingTextSmall]}>Puesto</Text>
                </View>
            </View>

        </View>

    )

}

const userbox = StyleSheet.create({
    box: {
        width: '100%',
        overflow: 'hidden',
        borderRadius: borderRadius.xl,
        backgroundColor: colors.primary,
    },
    boxAvatar: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: colors.white,
        borderRadius: borderRadius.pill,
    },
    info: {
        width: '100%',
        paddingVertical: 10,
    },
    name: {
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSize.subtitle,
        fontFamily: fontFamily.semibold,
    },
    grade: {
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSize.normal,
        fontFamily: fontFamily.normal,
    },
    shortcut: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    ranking: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 8,
        backgroundColor: '#0e2d5d', 
        justifyContent: 'space-between',
    },
    rankingItem: {
        padding: 10,
        flex: 1,
        backgroundColor: '#0d4a9b',
        borderRadius: borderRadius.large,
    },
    rankingText: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fontFamily.normal,
    },
    rankingTextTitle: {
        fontSize: fontSize.normal,
        fontFamily: fontFamily.semibold,
    },
    rankingTextSmall: {
        fontSize: fontSize.small,
    }
})