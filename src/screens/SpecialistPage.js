import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const SpecialtyCareScreen = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');

  const procedures = ['Knee Arthroscopy', 'Knee replacement surgery', 'Other knee operations'];

  const regions = [
    'Clinic #1',
    'Clinic #2',
    'Clinic #3',
    'Clinic #4',
    'Clinic #5',
    'Clinic #6',
    'Clinic #7',
    'Clinic #8',
    'Clinic #9',
  ];

  const urgencies = ['Urgency Level 1', 'Urgency Level 5', 'Urgency Level 10'];

  const specialists = {
    // hardcoded placeholder specialist
    'Dr. ABCD': {
      semiUrgent: '2 weeks',
      urgent: '1 week',
      nonUrgent: 'Unknown waiting time',
    },
  };

  const handleProcedureChange = (value) => {
    setSelectedProcedure(value);
  };

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
  };

  const handleUrgencyChange = (value) => {
    setSelectedUrgency(value);
  };

  const calculateWaitingTime = () => {
    const specialist = 'Dr. ABCD';

    if (selectedUrgency === 'semi-urgent') {
      return specialists[specialist].semiUrgent;
    }

    else if (selectedUrgency === 'urgent') {
      return specialists[specialist].urgent;
    }

    else {
      return specialists[specialist].nonUrgent;
    }
  };

  const handleCheckWaitingTime = () => {
    const waitingTime = calculateWaitingTime();
    const specialistName = 'Dr. ABCD';

    alert(`${specialistName}`)
    alert(`Procedure: ${selectedProcedure}\nSpecialist: ${specialistName}\nWaiting time: ${waitingTime}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Procedure:</Text>
      <Picker selectedValue={selectedProcedure} onValueChange={handleProcedureChange}>
        {procedures.map((procedure) => (
          <Picker.Item key={procedure} label={procedure} value={procedure} />
        ))}
      </Picker>

      <Text style={styles.label}>Select Health Care Region:</Text>
      <Picker selectedValue={selectedRegion} onValueChange={handleRegionChange}>
        {regions.map((region) => (
          <Picker.Item key={region} label={region} value={region} />
        ))}
      </Picker>

      <Text style={styles.label}>Select Urgency:</Text>
      <Picker selectedValue={selectedUrgency} onValueChange={handleUrgencyChange}>
        {urgencies.map((urgency) => (
          <Picker.Item key={urgency} label={urgency} value={urgency} />
        ))}
      </Picker>

      <Button title="Check Waiting Time" onPress={handleCheckWaitingTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SpecialtyCareScreen;