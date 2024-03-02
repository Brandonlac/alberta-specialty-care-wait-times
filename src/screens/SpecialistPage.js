import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const SpecialtyCareScreen = ({ doctorsList }) => {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleCheckWaitingTime = () => {
    const waitingTime = calculateWaitingTime();
    const specialist = doctorsList.length > 0 ? doctorsList[0] : null;

    if (specialist) {
      Alert.alert(
        `Doctor: ${specialist.name}`,
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
