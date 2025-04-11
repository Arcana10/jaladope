import { ScrollView, StyleSheet, Text, View } from "react-native";
import { borderRadius, colors, fontFamily, fontSize } from "../../themes/theme";

export default function HomeShortCut () {

    const shorts = [
        {
            text: 'Éxito Academico'
        },
        {
            text: 'Tareas'
        },
        {
            text: 'Exámenes'
        }
    ]

    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {shorts.map((s, index) => (
                <View key={index} style={shortcut.card}>
                    <View style={shortcut.icon}></View>
                    <Text style={shortcut.text}>{s.text}</Text>
                </View>
            ))}
        </ScrollView>

    )

}

const shortcut = StyleSheet.create({
    card: {
        gap: 10,
        marginRight: 10,
        paddingVertical: 10,
        paddingLeft: 5,
        paddingRight: 15,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: borderRadius.medium,
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: '#FBD969',
        borderRadius: borderRadius.large,
    },
    text: {
        fontSize: fontSize.normal,
        fontFamily: fontFamily.medium,
    }
})