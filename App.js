// // App.js

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Header from "./src/components/Header";
// import LandingPage from "./src/screens/LandingPage";
// import ProcedurePage from "./src/screens/ProcedurePage";
// import MyReferralPage from "./src/screens/MyReferralPage";
// import RegionPage from "./src/screens/RegionPage";
// import UrgencyPage from "./src/screens/UrgencyPage";


// const Stack = createStackNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//               <Stack.Screen
//                   name="LandingPage"
//                   component={LandingPage}
//                   options={{
//                       title: "Alberta Health Records",
//                       headerStyle: {
//                           backgroundColor: "#fff", // Set the background color of the header
//                           elevation: 0, // Remove shadow on Android
//                           shadowOpacity: 0, // Remove shadow on iOS
//                           borderBottomWidth: 0, // Remove border at the bottom of the header
//                       },
//                       headerTitleStyle: {
//                           fontSize: 24, // Set the font size of the header title
//                       },
//                       headerShown: false,
//                   }}
//               />
//               <Stack.Screen
//                   name="ProcedurePage"
//                   component={ProcedurePage}
//                   options={{
//                       header: ({ navigation }) => <Header navigation={navigation} />,
//                       title: "Procedures",
//                       headerStyle: {
//                           backgroundColor: "#fff", // Set the background color of the header
//                           elevation: 0, // Remove shadow on Android
//                           shadowOpacity: 0, // Remove shadow on iOS
//                           borderBottomWidth: 0, // Remove border at the bottom of the header
//                       },
//                       headerTitleStyle: {
//                           fontSize: 24, // Set the font size of the header title
//                       },
//                   }}
//               />
//               <Stack.Screen
//                   name="RegionPage"
//                   component={RegionPage}
//                   options={{
//                       title: "Region",
//                       headerStyle: {
//                           backgroundColor: "#fff", // Set the background color of the header
//                           elevation: 0, // Remove shadow on Android
//                           shadowOpacity: 0, // Remove shadow on iOS
//                           borderBottomWidth: 0, // Remove border at the bottom of the header
//                       },
//                       headerTitleStyle: {
//                           fontSize: 24, // Set the font size of the header title
//                       },
//                       header: ({ navigation }) => <Header navigation={navigation} />,
//                   }}
//               />
//               <Stack.Screen
//                   name="UrgencyPage"
//                   component={UrgencyPage}
//                   options={{
//                       title: "Urgency",
//                       headerStyle: {
//                           backgroundColor: "#fff", // Set the background color of the header
//                           elevation: 0, // Remove shadow on Android
//                           shadowOpacity: 0, // Remove shadow on iOS
//                           borderBottomWidth: 0, // Remove border at the bottom of the header
//                       },
//                       headerTitleStyle: {
//                           fontSize: 24, // Set the font size of the header title
//                       },
//                       header: ({ navigation }) => <Header navigation={navigation} />,
//                   }}
//               />
//               <Stack.Screen
//                   name="MyReferralPage"
//                   component={MyReferralPage}
//                   options={{
//                       title: "My Referral",
//                       headerStyle: {
//                           backgroundColor: "#fff", // Set the background color of the header
//                           elevation: 0, // Remove shadow on Android
//                           shadowOpacity: 0, // Remove shadow on iOS
//                           borderBottomWidth: 0, // Remove border at the bottom of the header
//                       },
//                       headerTitleStyle: {
//                           fontSize: 24, // Set the font size of the header title
//                       },
//                       header: ({ navigation }) => <Header navigation={navigation} />,
//                   }}
//               />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

// // import React from "react";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createStackNavigator } from "@react-navigation/stack";

// // import Header from "./src/components/Header";
// // import LandingPage from "./src/screens/LandingPage";
// // import ProcedurePage from "./src/screens/ProcedurePage";
// // import MyReferralPage from "./src/screens/MyReferralPage";
// // import RegionPage from "./src/screens/RegionPage";
// // import UrgencyPage from "./src/screens/UrgencyPage";
// // import Procedure from "./src/components/Procedure";

// // const Stack = createStackNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="LandingPage">
// //         <Stack.Screen
// //           name="LandingPage"
// //           component={LandingPage}
// //           options={{ headerShown: false }} // Hide header for MainPage
// //         />
// //         <Stack.Screen name="Procedure" component={ProcedurePage} />
// //         <Stack.Screen name="MyReferral" component={MyReferralPage} />
// //         <Stack.Screen name="Region" component={RegionPage} />
// //         <Stack.Screen name="Urgency" component={UrgencyPage} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./src/components/Header";
import LandingPage from "./src/screens/LandingPage";
import ProcedurePage from "./src/screens/ProcedurePage";
import MyReferralPage from "./src/screens/MyReferralPage";
import RegionPage from "./src/screens/RegionPage";
import UrgencyPage from "./src/screens/UrgencyPage";
import SpecialistPage from "./src/screens/SpecialistPage"
import MyReferralPage2 from "./src/screens/MyReferralPage2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: route.name !== "LandingPage" ? ({ navigation }) => <Header navigation={navigation} /> : null,
        })}
      >
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProcedurePage"
          component={ProcedurePage}
          options={{
            title: "Procedures",
            headerLeft: () => (
              <HeaderButton navigation={navigation} destination="LandingPage" />
            ),
          }}
        />
        <Stack.Screen
          name="RegionPage"
          component={RegionPage}
          options={{
            title: "Region",
          }}
        />
        <Stack.Screen
          name="UrgencyPage"
          component={UrgencyPage}
          options={{
            title: "Urgency",
          }}
        />
        <Stack.Screen
          name="MyReferralPage"
          component={MyReferralPage}
          options={{
            title: "My Referral",
          }}
        />
        <Stack.Screen
          name="MyReferralPage2"
          component={MyReferralPage2}
          options={{
            title: "My Referral2",
          }}
        />
        <Stack.Screen
          name="SpecialistPage"
          component={SpecialistPage}
          options={{
            title: "SpecialistPage",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const foot = [
  { label: "Interventions on the Ankle and Foot", value: "Foot" },
];

const knee = [
  { label: "Knee Arthroscopy", value: "Knee" },
  { label: "Knee Replacement Surgery", value: "Knee" },
  { label: "Other Interventions on the Knee", value: "Knee" },
];

const genitals = [
  { label: "Hysterectomy", value: "Vagina" },
  { label: "Interventions on the Urinary Bladder", value: "Bladder" },
  { label: "Interventions on the Urinary System", value: "Bladder" },
  { label: "Interventions on the Vagina", value: "Vagina" },
  { label: "Muscles and Bones of the Trunk and Pelvis", value: "Pelvis" },
  { label: "Other Interventions on the Female Genital Tract", value: "Genital" },
  { label: "Other Interventions on the Male Genital System", value: "Genital" },
  { label: "Other: Lower Body Blood Vessels", value: "Lower Body" },
  { label: "Prostate Surgery", value: "Prostate" },
  { label: "Tubal Ligation for Sterilization", value: "Tubal" },
];