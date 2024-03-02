import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const SpecialtyCareScreen = ({ route }) => {
  const { doctorsData } = route.params;

  const handleCheckWaitingTime = () => {
    const waitingTime = calculateWaitingTime();
    if (doctorsData && doctorsData.length > 0) {
      const specialistName = doctor.name;
      Alert.alert(
        `Doctor: ${specialistName}`,
        `Procedure: ${selectedProcedure}\nWaiting time: ${waitingTime}`
      );
    }
  };

  return (
    <View style={styles.container}>
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
