
import {
    AnimatedTabBarNavigator,
} from 'react-native-animated-nav-tab-bar'
import { HomePage } from '../components/pages/HomePage';
import { SearchPage } from '../components/pages/SearchPage';
import { ProjectListPage } from '../components/pages/ProjectsListPage';

const Tabs = AnimatedTabBarNavigator();

export const TabNavigation = () => (
    <>
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#2F7C6E",
                inactiveTintColor: "#222222"
            }}
            appearance={{
                tabBarBackground: "#FFFFFF",
                shadow: true,
                floating: true
            }}
        >

            <Tabs.Screen name="Inicio" component={HomePage} />
            <Tabs.Screen name="Buscar" component={SearchPage} />
            <Tabs.Screen name="Proyectos" component={ProjectListPage} />

        </Tabs.Navigator>
    </>
)