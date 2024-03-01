// App.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "./src/screens/LandingPage";
import ProcedurePage from "./src/screens/ProcedurePage";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    options={{
                        title: "Alberta Health Records",
                        headerStyle: {
                            backgroundColor: "#fff", // Set the background color of the header
                            elevation: 0, // Remove shadow on Android
                            shadowOpacity: 0, // Remove shadow on iOS
                            borderBottomWidth: 0, // Remove border at the bottom of the header
                        },
                        headerTitleStyle: {
                            fontSize: 24, // Set the font size of the header title
                        },
                    }}
                />
                <Stack.Screen
                    name="ProcedurePage"
                    component={ProcedurePage}
                    options={{
                        title: "Procedures",
                        headerStyle: {
                            backgroundColor: "#fff", // Set the background color of the header
                            elevation: 0, // Remove shadow on Android
                            shadowOpacity: 0, // Remove shadow on iOS
                            borderBottomWidth: 0, // Remove border at the bottom of the header
                        },
                        headerTitleStyle: {
                            fontSize: 24, // Set the font size of the header title
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
