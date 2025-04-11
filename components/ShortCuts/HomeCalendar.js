import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import 'moment/locale/es';
import { borderRadius, colors, fontFamily, fontSize } from "../../themes/theme";

moment.locale('es');

export default function HomeCalendar() {
    const startOfWeek = moment().startOf('isoWeek');
    const days = [];

    const today = moment().format('YYYY-MM-DD'); // Formato para comparar

    // Generamos los días de lunes a viernes
    for (let i = 0; i < 5; i++) {
        days.push(startOfWeek.clone().add(i, 'days'));
    }

    return (
        <View style={styles.container}>
            {days.map((day, index) => {
                const isToday = day.format('YYYY-MM-DD') === today;

                return (
                    <View key={index} style={[styles.dayContainer, isToday && styles.todayContainer]}>
                        <Text style={[styles.dayName, isToday && styles.todayText]}>{day.format('ddd')}</Text>
                        <Text style={[styles.dateText, isToday && styles.todayText]}>{day.format('DD')}</Text>
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    dayContainer: {
        alignItems: 'center',
        padding: 10,
        overflow: 'hidden',
        borderRadius: borderRadius.md,
        backgroundColor: colors.white,
    },
    todayContainer: {
        backgroundColor: colors.primary,
    },
    dayName: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.medium,
        color: colors.text,
        textTransform: 'capitalize', // Para que 'lunes' salga con mayúscula inicial si quieres
    },
    dateText: {
        fontSize: fontSize.sm,
        fontFamily: fontFamily.regular,
        color: colors.textSecondary,
    },
    todayText: {
        color: colors.white,
    },
});