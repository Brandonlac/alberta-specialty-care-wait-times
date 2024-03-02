// DoctorsList.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const DoctorsList = ({ doctors, onDoctorPress }) => {
  return (
    <View style={styles.container}>
      {doctors.map((doctor) => (
        <TouchableOpacity
          key={doctor.name}
          onPress={() => onDoctorPress(doctor)}
        >
          <View style={styles.doctorItemContainer}>
            <FontAwesomeIcon icon={faHouse} size={16} style={styles.icon} />
            <Text style={styles.doctorItem}>{`MD. ${doctor.name}`}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  doctorItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 15,
    paddingBottom: 15,
  },
  icon: {
    marginRight: 20,
    marginTop: 5,
  },
  doctorItem: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
});

export default DoctorsList;
