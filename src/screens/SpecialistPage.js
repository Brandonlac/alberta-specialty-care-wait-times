import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert, Text } from 'react-native';

const SpecialtyCareScreen = ({ route }) => {
  const { clinicAddress, clinicName, procedure, selectedZone, selectedClinic, doctorName, sliderValue } = route.params;

  const handleCheckWaitingTime = () => {
    const waitingTime = calculateWaitingTime();
    if (doctorsData && doctorsData.length > 0) {
      Alert.alert(
        `Doctor: ${doctorName}`,
        `Procedure: ${selectedProcedure}\nWaiting time: ${waitingTime}`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Procedure: {procedure}</Text>
      <Text style={styles.infoText}>Clinic Name: {clinicName}</Text>
      <Text style={styles.infoText}>Clinic Address: {clinicAddress}</Text>
      <Text style={styles.infoText}>Doctor Name: {doctorName}</Text>
      <Text style={styles.infoText}>Urgency Level: {sliderValue}</Text>
      <Button title="Check Waiting Time" onPress={handleCheckWaitingTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SpecialtyCareScreen;