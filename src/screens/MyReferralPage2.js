import React, {useState} from "react";
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Touchable,
} from "react-native";

// { date: "April 1, 2024", year: "2024", name: "Dr. Miranda Bailey", status: "Accepted", statusDate: "April 10, 2024" },
const MyReferralPage2 = ({ route }) => {
    const {year, name, date, status, statusDate} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Your Referral for: {name}</Text>
            <Text style={styles.bigText}>Revieved on: {date}</Text>
            <Text style={styles.bigText}>Status: {status}</Text>
            {status === "Accepted" && <Text style={styles.text}>Accepted on: {statusDate}</Text>}
                        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "justify-between",
        paddingTop: 20,
    },
});


export default MyReferralPage2;