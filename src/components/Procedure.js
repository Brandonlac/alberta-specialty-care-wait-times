// Procedure.js
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import {
    faCaretDown,
    faPersonWalking,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Procedure = ({ navigation }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [data, setData] = useState(null);
    const [selectedCircle, setSelectedCircle] = useState(null);

    const upperHead = [
        { label: "Cataract Surgery 1st Eye Only", value: "cataract" },
        { label: "Interventions on the Brain and Spinal Cord", value: "brain" },
        { label: "Interventions on the Eyelid", value: "eyelid" },
        { label: "Other Interventions on the Eye", value: "eye" },
        { label: "Other Interventions on the Eye", value: "eye" },
    ];

    const lowerHead = [
        {
            label: "Interventions on the Nose and Nasal Cartilage",
            value: "nose",
        },
        { label: "Other Interventions on the Ear", value: "ear" },
        {
            label: "Other Interventions on the Mouth and Throat",
            value: "throat",
        },
        { label: "Other: Head, Nasal Cavity and Sinuses", value: "sinus" },
        { label: "Tonsillectomy", value: "tonsil" },
        { label: "Tubes in the Ears", value: "tubes" },
    ];

    const shoulder = [
        {
            label: "Interventions on the Shoulder",
            value: "shoulder",
        },
    ];

    const heart = [
        { label: "Coronary Artery Bypass Graft (CABG)", value: "cabg" },
        { label: "Heart Valve Surgery", value: "valve" },
        {
            label: "Implantation of Pacemaker and Other Devices",
            value: "pacemaker",
        },
        {
            label: "Interventions on the Primary Blood Vessels",
            value: "primaryvessels",
        },
        { label: "Other: Heart and Related Structures", value: "structure" },
        { label: "Other: Upper Body Blood Vessels", value: "vessels" },
    ];

    const chest = [
        {
            label: "Interventions on the Respiratory System",
            value: "respiratory",
        },
        { label: "Mastectomy: Removal of Breast", value: "mastectomy" },
        { label: "Other Interventions on the Breast", value: "breast" },
        {
            label: "Spinal Vertebrae, Discs and Muscles of the Back",
            value: "back",
        },
    ];

    const elbow = [
        { label: "Interventions on the Arm and Elbow", value: "Elbow" },
    ];

    const wrist = [
        { label: "Carpal Tunnel Release", value: "Carpal" },
        { label: "Interventions on the Hand and Wrist", value: "Wrist" },
    ];

    const stomach = [
        { label: "Gall Bladder Removal", value: "Gall Bladder" },
        { label: "Hernia Repair", value: "Hernia" },
        { label: "Interventions on the Large Intestine", value: "Intestine" },
        { label: "Interventions on the Small Intestine", value: "Intestine" },
        { label: "Interventions on the Stomach", value: "Stomach" },
        {
            label: "Other Interventions on the Digestive System ",
            value: "Digestive",
        },
        {
            label: "Other: Liver, Spleen, Pancreas and Gall Bladder",
            value: "Other",
        },
    ];

    const hip = [
        { label: "Hip Replacement Surgery", value: "Hip" },
        { label: "Interventions on the Lower Leg", value: "Leg" },
        { label: "Other Interventios on the Hip and Thigh", value: "Thigh" },
        { label: "Varicose Vein(Leg) Surgery", value: "Leg" },
    ];

    const genitals = [
        { label: "Hysterectomy", value: "Vagina" },
        { label: "Interventions on the Urinary Bladder", value: "Bladder" },
        { label: "Interventions on the Urinary System", value: "Bladder" },
        { label: "Interventions on the Vagina", value: "Vagina" },
        { label: "Muscles and Bones of the Trunk and Pelvis", value: "Pelvis" },
        {
            label: "Other Interventions on the Female Genital Tract",
            value: "Genital",
        },
        {
            label: "Other Interventions on the Male Genital System",
            value: "Genital",
        },
        { label: "Other: Lower Body Blood Vessels", value: "Lower Body" },
        { label: "Prostate Surgery", value: "Prostate" },
        { label: "Tubal Ligation for Sterilization", value: "Tubal" },
    ];

    const knee = [
        { label: "Knee Arthroscopy", value: "Knee" },
        { label: "Knee Replacement Surgery", value: "Knee" },
        { label: "Other Interventions on the Knee", value: "Knee" },
    ];

    const foot = [
        { label: "Interventions on the Ankle and Foot", value: "Foot" },
    ];

    const other = [
        { label: "Cancer Services", value: "cancer" },
        { label: "CT Scans", value: "ct" },
        { label: "Interventions on Lymph Nodes", value: "lymph" },
        { label: "MRI Scans", value: "mri" },
        { label: "Other Interventions on the Nerves", value: "nerves" },
        { label: "Therapeutic Interventions on the Skin", value: "skin" },
    ];

    const handleSelect = (value) => {
        setSelectedValue(value);
        setShowDropdown(false);
    };

    const [circlePositions, setCirclePositions] = useState([
        { x: 165, y: 190, data: upperHead },
        { x: 210, y: 220, data: lowerHead },
        { x: 150, y: 255, data: shoulder },
        { x: 190, y: 295, data: heart },
        { x: 160, y: 300, data: chest },
        { x: 220, y: 325, data: elbow },
        { x: 100, y: 315, data: wrist },
        { x: 165, y: 345, data: stomach },
        { x: 165, y: 365, data: genitals },
        { x: 135, y: 345, data: hip },
        { x: 200, y: 395, data: knee },
        { x: 220, y: 470, data: foot },
        { x: 300, y: 500, data: other },
    ]);

    const handleCirclePress = (position, index) => {
        setSelectedCircle(index);
        setData(position.data);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setShowDropdown(!showDropdown)}
                style={styles.dropdownButton}
            >
                <Text style={styles.dropdownButtonText}>
                    {selectedValue ? selectedValue.label : "Select a procedure"}
                </Text>
                <FontAwesomeIcon
                    icon={faCaretDown}
                    size={15}
                    style={styles.caretIcon}
                />
            </TouchableOpacity>
            {showDropdown && (
                <ScrollView style={styles.dropdownList}>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={styles.dropdownItem}
                            onPress={() => handleSelect(item)}
                        >
                            <Text>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}

            {circlePositions.map((position, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.circle,
                        selectedCircle === index,
                        {
                            left: position.x,
                            top: position.y,
                        },
                    ]}
                    onPress={() => handleCirclePress(position)}
                >
                    <FontAwesomeIcon
                        icon={faCircle}
                        size={30}
                        color={"#d3d3d3"}
                    />
                </TouchableOpacity>
            ))}

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
