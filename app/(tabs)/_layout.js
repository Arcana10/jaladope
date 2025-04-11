import { Tabs } from "expo-router";
import TabBarLayout from "../../components/TabBar/TabBarLayout";

export default function TabsLayout () {

    return (

        <Tabs tabBar={props => <TabBarLayout {...props} />} screenOptions={{headerShown: false}}>
            <Tabs.Screen name="index" options={{title: 'Inicio'}}/>
            <Tabs.Screen name="courses" options={{title: 'Cursos'}}/>
            <Tabs.Screen name="qr" options={{title: 'Qr'}}/>
            <Tabs.Screen name="chat" options={{title: 'Chat'}}/>
            <Tabs.Screen name="profile" options={{title: 'Perfil'}}/>
        </Tabs>

    )

}