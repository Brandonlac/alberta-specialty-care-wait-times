//UrgencyPage.js
import React, { useState, useEffect } from 'react';
import Slider from '@react-native-community/slider';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';


import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar,
    Dimensions,
} from "react-native";

const { width } = Dimensions.get('window');

const SliderWithCustomRadioButtons = ({ route }) => {
    const navigation = useNavigation();
    const [sliderValue, setSliderValue] = useState(5);
    const [selectedValue, setSelectedValue] = useState('5');
    const [emergencyChecked, setEmergencyChecked] = useState(false);

    const radioButtons = [
        { label: '1 Refers to Non-urgent', value: '1' },
        { label: '5 Refers to Semi-urgent', value: '5' },
        { label: '10 Refers to Urgent', value: '10' },
    ];

    const handleSliderChange = (value) => {
        setSliderValue(value);
        setSelectedValue(value.toString());
    };

    const handleRadioChange = (value) => {
        setSelectedValue(value);
        setSliderValue(parseInt(value, 10));
    };
    const handleNextPress = () => {
        navigation.navigate("SpecialistPage", {
            ...route.params, // Spread the previous params
            sliderValue,            // Add new params
            emergencyChecked
        });
    };

    return (
        <SafeAreaView style={styles.container_urgency}>
            <Text style={styles.bigText}>Please rate your urgency from 1-10.</Text>
            <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={sliderValue}
                onValueChange={handleSliderChange}
                minimumTrackTintColor={sliderValue > 5 ? 'red' : 'green'}
            />
            <Text style={styles.bigText}>Urgency: {sliderValue}</Text>
            <View style={styles.radioContainer}>
                {radioButtons.map((button) => (
                    <TouchableOpacity
                        key={button.value}
                        style={styles.radioButton}
                        onPress={() => handleRadioChange(button.value)}
                    >
                        <View style={styles.outerCircle}>
                            {selectedValue === button.value && <View style={styles.innerCircle} />}
                        </View>
                        <Text style={styles.radioText}>{button.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={emergencyChecked}
                    onValueChange={setEmergencyChecked}
                />
                <Text style={styles.checkboxLabel}>
                    If this is an emergency call 911 immediately
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button} // Make sure to define this style
                    onPress={() => navigation.goBack()}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button} // Make sure to define this style
                    onPress={handleNextPress}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};


const UrgencyPage = ({ route }) => {

    useEffect(() => {
        // Log the parameters to the console when the component mounts
        console.log('Procedure:', route.params?.procedure);
        console.log('Clinic Name:', route.params?.clinicName);
        console.log('Clinic Address:', route.params?.clinicAddress);
        console.log('Doctor Name:', route.params?.doctorName);
    }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

    return (
        <View style={styles.container}>
            <SliderWithCustomRadioButtons route={route} />
        </View>
    );
};




export default UrgencyPage;
// Styles for UrgencyPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },

    container_urgency: {
        justifyContent: 'center', // Center children vertically
        alignItems: 'center',
        padding: 10,
        paddingTop: 70,
        width: '80%',
        // Remove padding here if it's not needed or adjust accordingly
    },
    slider: {
        width: width * 0.9,
        height: 20,
        padding: 50,
    },
    radioContainer: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'flex-start'
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 0,
        marginTop: 10, // Add margin to the top of each button
        marginBottom: 10, // Increase bottom margin to spread them out
    },
    outerCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },
    radioText: {
        marginLeft: 8,
    },
    bigText: {
        fontSize: 20,
    },
    checkboxLabel: {
        // Style the text to make it stand out as in the mockup
        fontWeight: 'bold',
        marginLeft: 5,
    },
    checkboxContainer: {
        flexDirection: 'row', // Align children in a row
        alignSelf: 'flex-start', // Center children vertically within the row
        marginTop: 20,
    },
    button: {
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 20, // Horizontal padding
        paddingVertical: 10, // Vertical padding
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 30,

    }
});