// Header.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faTruckMedical,
    faHouseUser,
    faSquareH,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Screen1")}
                style={styles.button}
            >
                <FontAwesomeIcon icon={faTruckMedical} size={30} />
                <Text>Procedure</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Screen2")}
                style={styles.button}
            >
                <FontAwesomeIcon icon={faHouseUser} size={30} />
                <Text>Region</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Screen3")}
                style={styles.button}
            >
                <FontAwesomeIcon icon={faSquareH} size={30} />
                <Text>Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Screen4")}
                style={styles.button}
            >
                <FontAwesomeIcon icon={faEnvelope} size={30} />
                <Text>My Referral</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: "lightblue",
    },
    button: {
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});

export default Header;