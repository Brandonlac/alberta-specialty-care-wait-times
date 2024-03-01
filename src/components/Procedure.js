// Procedure.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faTruckMedical,
    faHouseUser,
    faSquareH,
    faEnvelope,
    faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";

const Procedure = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={faPersonWalking}
                style={styles.icon}
                size={300}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    button: {
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    selectedButton: {
        backgroundColor: "lightblue",
    },
    icon: {
        position: "absolute",
        zIndex: -1,
        fontSize: 200,
    },
});

export default Procedure;
