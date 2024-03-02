// ProcedurePage.js
import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import Header from "../components/Header";
import Procedure from "../components/Procedure";

const ProcedurePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Procedure />
        </View>
    );
};

// Styles for LandingPage

export default ProcedurePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "justify-between",
    },
});
