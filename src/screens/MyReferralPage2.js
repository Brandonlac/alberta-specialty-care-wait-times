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

const MyReferralPage2 = ({ route }) => {
    const {year, name} = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Year: {year}</Text>
            <Text style={styles.bigText}>Name: {name}</Text>
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