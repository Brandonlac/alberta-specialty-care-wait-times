import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert, Text } from 'react-native';

const SpecialtyCareScreen = ({ route }) => {
  const { clinicAddress, clinicName, procedure, selectedZone, selectedClinic, doctorName, sliderValue } = route.params;

  const calculateWaitingTime = () => {
    if (sliderValue >= 0 && sliderValue <= 3) {
      return '8 months';
    } else if (sliderValue >= 4 && sliderValue <= 6) {
      return '3 months';
    } else if (sliderValue >= 7 && sliderValue <= 10) {
      return '2 weeks';
    } else {
      return 'N/A'; // Handle invalid slider values
    }
  };

  const [waitingTime, setWaitingTime] = useState('');

  useEffect(() => {
    setWaitingTime(calculateWaitingTime());
  }, [sliderValue]);

  return (
    <View style={styles.container}>
     <View style={styles.row}>
        <Text style={styles.title}>Procedure:</Text>
        <Text style={styles.infoText}>{procedure}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Clinic Name:</Text>
        <Text style={styles.infoText}>{clinicName}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Clinic Address:</Text>
        <Text style={styles.infoText}>{clinicAddress}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Doctor Name:</Text>
        <Text style={styles.infoText}>{doctorName}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Urgency Level:</Text>
        <Text style={styles.infoText}>{sliderValue}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Waiting Time:</Text>
        <Text style={styles.infoText}>{waitingTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoText: {
    flex: 1,
  },
});

export default SpecialtyCareScreen;