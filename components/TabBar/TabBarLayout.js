import { Pressable, StyleSheet, Text, View } from "react-native";
import { borderRadius, colors, fontFamily, fontSize } from "../../themes/theme";
import { IconSmartHome, IconSchool, IconScan, IconMessageChatbot, IconUserCircle } from "@tabler/icons-react-native";

export default function TabBarLayout ({ state, descriptors, navigation }) {

    const icons = {
        index: ( props ) => <IconSmartHome size={24} strokeWidth={1.5} color={colors.gray} {...props} />,
        courses: ( props ) => <IconSchool size={24} strokeWidth={1.5} color={colors.gray} {...props} />,
        qr: ( props ) => <IconScan size={24} strokeWidth={1.5} color={colors.gray} {...props} />,
        chat: ( props ) => <IconMessageChatbot size={24} strokeWidth={1.5} color={colors.gray} {...props} />,
        profile: ( props ) => <IconUserCircle size={24} strokeWidth={1.5} color={colors.gray} {...props} />
    }

    return (

        <View style={tabbar.content}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={route.name}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[tabbar.item]}
                    >
                        {
                            icons[route.name]({
                                color: isFocused ? colors.primary : colors.gray
                            })
                        }
                        <Text style={[tabbar.itemTxt, { color: isFocused ? colors.primary : colors.gray }]}>{label}</Text>
                    </Pressable>
                );
            })}
        </View>
    )

}

const tabbar = StyleSheet.create({
    content: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderTopLeftRadius: borderRadius.xl,
        borderTopRightRadius: borderRadius.xl,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemTxt: {
        fontSize: fontSize.tiny,
        fontFamily: fontFamily.normal
    }
})