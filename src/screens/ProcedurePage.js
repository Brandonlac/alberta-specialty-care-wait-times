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
    faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import procedureData from "./../procedureData.json";

const Procedure = ({ navigation }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedProcedure, setSelectedProcedure] = useState(null);
    const [selectedCircle, setSelectedCircle] = useState(null);
    const [selectedCircleData, setSelectedCircleData] = useState(null);

    const circlePositions = [
        { x: 210, y: 185, data: procedureData["upperHead"] },
        { x: 270, y: 245, data: procedureData["lowerHead"] },
        { x: 150, y: 295, data: procedureData["shoulder"] },
        { x: 230, y: 335, data: procedureData["heart"] },
        { x: 190, y: 350, data: procedureData["chest"] },
        { x: 100, y: 330, data: procedureData["elbow"] },
        { x: 310, y: 415, data: procedureData["wrist"] },
        { x: 200, y: 420, data: procedureData["stomach"] },
        { x: 200, y: 460, data: procedureData["genitals"] },
        { x: 150, y: 440, data: procedureData["hip"] },
        { x: 270, y: 510, data: procedureData["knee"] },
        { x: 290, y: 600, data: procedureData["foot"] },
    ];

    const otherPosition = { x: 340, y: 635, data: procedureData["other"] }; 

    const handleSelect = (value) => {
        setSelectedProcedure(value);
        setShowDropdown(false);

        // Navigate ot Region page, pass selected procedure
        navigation.navigate('RegionPage', {
            procedure: value,
        });
    };

    const handleCirclePress = (position, index) => {
        setSelectedCircle(index);
        setSelectedCircleData(position.data);
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
                <TouchableOpacity
                    style={[
                        styles.circle,
                        selectedCircle === circlePositions.length &&
                            styles.selectedCircle,
                        { left: otherPosition.x, top: otherPosition.y },
                    ]}
                    onPress={() =>
                        handleCirclePress(otherPosition, circlePositions.length)
                    }
                >
                    <FontAwesomeIcon
                        icon={
                            faNotesMedical
                        }
                        size={30}
                        color={
                            selectedCircle === circlePositions.length
                                ? "#3BB143"
                                : "#d3d3d3"
                        }
                    />
                </TouchableOpacity>

                <FontAwesomeIcon
                    icon={faPersonWalking}
                    style={styles.icon}
                    size={450}
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
