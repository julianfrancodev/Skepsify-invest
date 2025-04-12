import {
    AnimatedTabBarNavigator,
} from 'react-native-animated-nav-tab-bar'
import { HomePage } from '../components/pages/HomePage';
import { SearchPage } from '../components/pages/SearchPage';
import { ProjectListPage } from '../components/pages/ProjectsListPage';
import Icon from 'react-native-vector-icons/Feather';
import { ProfilePage } from '../components/pages/ProfilePage';

const Tabs = AnimatedTabBarNavigator();

export const TabNavigation = () => (
        <Tabs.Navigator

            tabBarOptions={{
                activeTintColor: "#A3C4F3",
                inactiveTintColor: "#222222",

            }}
            appearance={{
                tabBarBackground: "#FFFFFF",
                shadow: true,
                floating: false,
            }}
        >

            <Tabs.Screen name="Inicio" component={HomePage}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size?: number }) => (
                        <Icon
                            name="home"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                        />
                    )
                }}
            />
            <Tabs.Screen name="Buscar" component={SearchPage}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size?: number }) => (
                        <Icon
                            name="search"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                        />
                    )
                }}
            />
            <Tabs.Screen name="Proyectos" component={ProjectListPage}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size?: number }) => (
                        <Icon
                            name="book-open"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                        />
                    )
                }}
            />

            <Tabs.Screen name="Perfil" component={ProfilePage}
                options={{
                    tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size?: number }) => (
                        <Icon
                            name="user"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                        />
                    )
                }}
            />

        </Tabs.Navigator>
)