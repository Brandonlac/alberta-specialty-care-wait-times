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
// import Screen1 from "./src/screens/Screen1";
// import Screen2 from "./src/screens/Screen2";
// import Screen3 from "./src/screens/Screen3";
// import Screen4 from "./src/screens/Screen4";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">
                <Stack.Screen
                    name="LandingPage"
                    component={LandingPage}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
                <Stack.Screen name="Screen4" component={Screen4} /> */}
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
