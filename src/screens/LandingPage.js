// LandingPage.js
import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { Input } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faTruckMedical,
    faX,
    faUser,
    faSearch,
    faFile,
} from "@fortawesome/free-solid-svg-icons";
import WaitingTimes from "./WaitingTimes";

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.infoLeft}>
                    <View style={styles.userIconContainer}>
                        <FontAwesomeIcon icon={faUser} size={30} />
                    </View>
                    <Text>User #1</Text>
                </View>

                <View style={styles.infoRight}>
                    <View style={styles.fileIconContainer}>
                        <FontAwesomeIcon icon={faFile} size={50} />
                    </View>
                    <Input
                        placeholder="Search..."
                        leftIcon={
                            <FontAwesomeIcon
                                icon={faSearch}
                                size={20}
                                color="gray"
                            />
                        }
                        containerStyle={styles.searchContainer}
                        inputContainerStyle={styles.searchInputContainer}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faX} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faX} size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faX} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faX} size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesomeIcon icon={faX} size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("WaitingTimes")}
                    style={styles.button}
                >
                    <FontAwesomeIcon icon={faTruckMedical} size={30} />
                    <Text>Waiting Time</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles for LandingPage

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "justify-between",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "justify-between",
    },
    button: {
        backgroundColor: "lightblue",
        padding: "10%",
        margin: 5,
        borderRadius: 1,
        width: "45%",
        alignItems: "center",
    },
    infoLeft: {
        flexDirection: "column",
        width: "50%",
        alignItems: "center",
    },
    infoRight: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "left",
        marginLeft: 10,
        borderColor: "black",
        width: "50%",
    },
    userIconContainer: {
        width: 100,
        height: 100,
        borderRadius: 1, // Border radius to create a square shape
        borderWidth: 1, // Border width
        borderColor: "black", // Border color
        justifyContent: "center",
        alignItems: "center",
    },
    fileIconContainer: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "left",
        borderWidth: 1,
        borderColor: "light gray",
        borderRadius: 5,
        marginBottom: 5,
    },

    searchContainer: {
        borderWidth: 1,
        borderColor: "light gray",
        borderRadius: 5,
        height: 40,
    },
    searchInputContainer: {
        borderBottomWidth: 0,
    },
});
