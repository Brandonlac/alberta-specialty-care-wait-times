//UrgencyPage.js
import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const UrgencyPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
        </View>
    );
};

// Styles for UrgencyPage

export default UrgencyPage;
const SliderWithCustomRadioButtons = () => {
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

    return (
        <SafeAreaView style={styles.container}>
            <Header />
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
            <Text style={styles.bigText} >Urgency: {sliderValue}</Text>
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
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "justify-between",
    },
    slider: {
        width: 300,
        height: 40,
    },
    radioContainer: {
        marginTop: 20,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
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
});
