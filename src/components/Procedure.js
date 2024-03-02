import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faCheckCircle,
    faCaretDown,
    faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import procedureData from "./../procedureData.json";

const Procedure = ({ navigation }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedProcedure, setSelectedProcedure] = useState(null);
    const [selectedCircle, setSelectedCircle] = useState(null);
    const [selectedCircleData, setSelectedCircleData] = useState(null);

    const circlePositions = [
        { x: 165, y: 190, data: procedureData["upperHead"] },
        { x: 210, y: 220, data: procedureData["lowerHead"] },
        { x: 150, y: 255, data: procedureData["shoulder"] },
        { x: 190, y: 295, data: procedureData["heart"] },
        { x: 160, y: 300, data: procedureData["chest"] },
        { x: 220, y: 325, data: procedureData["elbow"] },
        { x: 100, y: 315, data: procedureData["wrist"] },
        { x: 165, y: 345, data: procedureData["stomach"] },
        { x: 165, y: 365, data: procedureData["genitals"] },
        { x: 135, y: 345, data: procedureData["hip"] },
        { x: 200, y: 395, data: procedureData["knee"] },
        { x: 220, y: 470, data: procedureData["foot"] },
        { x: 300, y: 501, data: procedureData["other"] },
    ];

    const handleSelect = (value) => {
        setSelectedProcedure(value);
        setShowDropdown(false);
    };

    const handleCirclePress = (position, index) => {
        setSelectedCircle(index);
        setSelectedCircleData(position.data);
        setShowDropdown(true);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <TouchableWithoutFeedback onPress={closeDropdown}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => setShowDropdown(!showDropdown)}
                    style={styles.dropdownButton}
                >
                    <Text style={styles.dropdownButtonText}>
                        {selectedProcedure
                            ? selectedProcedure
                            : "Select a procedure"}
                    </Text>
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size={15}
                        style={styles.caretIcon}
                    />
                </TouchableOpacity>
                {showDropdown && selectedCircle !== null && (
                    <ScrollView
                        style={[styles.dropdownList, { maxHeight: "60%" }]}
                    >
                        {selectedCircleData &&
                            selectedCircleData.map(
                                (procedure, procedureIndex) => (
                                    <TouchableOpacity
                                        key={procedureIndex}
                                        style={styles.dropdownItem}
                                        onPress={() => handleSelect(procedure)}
                                    >
                                        <Text>{procedure}</Text>
                                    </TouchableOpacity>
                                )
                            )}
                    </ScrollView>
                )}

                {circlePositions.map((position, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.circle,
                            selectedCircle === index && styles.selectedCircle,
                            { left: position.x, top: position.y },
                        ]}
                        onPress={() => handleCirclePress(position, index)}
                    >
                        <FontAwesomeIcon
                            icon={
                                selectedCircle === index
                                    ? faCheckCircle
                                    : faCircle
                            }
                            size={30}
                            color={
                                selectedCircle === index ? "#3BB143" : "#d3d3d3"
                            }
                        />
                    </TouchableOpacity>
                ))}

                <FontAwesomeIcon
                    icon={faPersonWalking}
                    style={styles.icon}
                    size={300}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "justify-between",
        alignItems: "center",
        backgroundColor: "#fff",
        position: "relative",
    },
    icon: {
        position: "absolute",
        zIndex: -1,
        top: "25%",
    },
    dropdownButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "left",
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        margin: 20,
        width: "80%",
    },
    dropdownButtonText: {
        flex: 1,
    },
    caretIcon: {
        marginLeft: 10,
    },
    dropdownList: {
        left: 10,
        right: 10,
        maxHeight: 150,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        zIndex: 1,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
    },
    circle: {
        position: "absolute",
    },
});

export default Procedure;
