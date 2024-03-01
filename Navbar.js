import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Choose your preferred icon set

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="home-outline" size={24} color="#FFFFFF" />
        <Text style={styles.navButtonText}>Procedure</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="heart-outline" size={24} color="#FFFFFF" />
        <Text style={styles.navButtonText}>Region</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="plus-box-outline" size={24} color="#FFFFFF" />
        <Text style={styles.navButtonText}>Urgency</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton}>
        <Icon name="chat-outline" size={24} color="#FFFFFF" />
        <Text style={styles.navButtonText}>My Referral</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will distribute the buttons evenly
    backgroundColor: 'purple',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Navbar;
