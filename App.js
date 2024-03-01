// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import LandingPage from "./src/screens/LandingPage";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// App.js
// import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./src/screens/LandingPage";
import WaitingTimes from "./src/screens/WaitingTimes";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    // options={{ headerShown: false }}
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
                <Stack.Screen name="WaitingTimes" component={WaitingTimes} />
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
