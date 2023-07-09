import React from "react";
import { Appbar, BottomNavigation, Drawer } from "react-native-paper";
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, Text } from "react-native";
import { Content } from "./Content";
import { Cards } from "./Cards";
import { StoriesList } from "./stories/StoriesList";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.navigate(route.name);
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.title !== undefined
                                ? options.title
                                : route.name;

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="All Translations"
                component={Content}
                options={{
                    tabBarLabel: 'All Translations',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="translate" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Practice"
                component={Cards}
                options={{
                    tabBarLabel: 'Practice',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="card-multiple" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Stories"
                component={StoriesList}
                options={{
                    tabBarLabel: 'Stories',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="book-open-variant" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});