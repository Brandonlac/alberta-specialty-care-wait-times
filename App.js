// App.js
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
