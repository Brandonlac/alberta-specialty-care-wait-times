// Header.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faTruckMedical,
    faHouseUser,
    faSquareH,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({navigation}) => {
    const [selected, setSelected] = useState(null);

    const handlePress = (screenName) => {
        setSelected(screenName);
        navigation.navigate(screenName);
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener("state", (e) => {
            const currentRoute = e.data.state.routes[e.data.state.index];
            setSelected(currentRoute.name);
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                // onPress={() => navigation.navigate("Procedure")}
                onPress={() => handlePress("ProcedurePage")}
                style={[
                    styles.button,
                    selected === "ProcedurePage" && styles.selectedButton,
                ]}
            >
                <FontAwesomeIcon icon={faTruckMedical} size={30} />
                <Text>Procedure</Text>
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => navigation.navigate("Screen2")}
                onPress={() => handlePress("RegionPage")}
                style={[
                    styles.button,
                    selected === "RegionPage" && styles.selectedButton,
                ]}
            >
                <FontAwesomeIcon icon={faHouseUser} size={30} />
                <Text>Region</Text>
            </TouchableOpacity>
            <TouchableOpacity
                //onPress={() => navigation.navigate("Screen3")}
                onPress={() => handlePress("UrgencyPage")}
                style={[
                    styles.button,
                    selected === "UrgencyPage" && styles.selectedButton,
                ]}
            >
                <FontAwesomeIcon icon={faSquareH} size={30} />
                <Text>Urgency</Text>
            </TouchableOpacity>
            <TouchableOpacity
                //onPress={() => navigation.navigate("Screen4")}
                onPress={() => handlePress("MyReferralPage")}
                style={[
                    styles.button,
                    selected === "MyReferralPage" && styles.selectedButton,
                ]}
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
        marginTop: 20,
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
});

export default Header;
