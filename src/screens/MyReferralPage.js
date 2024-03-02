// ReferralPage.js
import React, { useState } from "react";
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
import Icon from "react-native-vector-icons/MaterialIcons"; // Import Icon
import MyReferralPage2 from "./MyReferralPage2";

const referrals = [
  { year: "2021", name: "Dr. Meredith Grey" },
  { year: "2022", name: "Dr. Derek Shepherd" },
  { year: "2023", name: "Dr. Cristina Yang" },
  { year: "2024", name: "Dr. Miranda Bailey" },
];

const MyReferralPage = ({ navigation }) => {
  const [startYear, setStartYear] = useState("2020");
  const [endYear, setEndYear] = useState("2025");
  const [isStartYearModalVisible, setIsStartYearModalVisible] = useState(false);
  const [isEndYearModalVisible, setIsEndYearModalVisible] = useState(false);
  const [years, setYears] = useState(
    Array.from(
      { length: new Date().getFullYear() - 1999 },
      (_, i) => `${i + 2000}`
    )
  );

  // filter referrals based on selected start and end year
  const filteredReferrals = referrals.filter(
    (referral) =>
      referral.year >= parseInt(startYear) && referral.year <= parseInt(endYear)
  );

  const selectStartYear = (year) => {
    // Ensure the selected start year is not after the current end year
    if (parseInt(year) > parseInt(endYear)) {
      alert("Start year cannot be after the end year.");
      setIsStartYearModalVisible(false);
      return;
    }
    setStartYear(year);
    setIsStartYearModalVisible(false);
  };

  const selectEndYear = (year) => {
    // Ensure the selected end year is not before the current start year
    if (parseInt(year) < parseInt(startYear)) {
      alert("End year cannot be before the start year.");
      setIsEndYearModalVisible(false);
      return;
    }
    setEndYear(year);
    setIsEndYearModalVisible(false);
  };
  return (
    <View style={styles.container}>
      {/* Modal for start year */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsStartYearModalVisible(true)}
      >
        <Text styles={styles.dropdownButtonText}>
          {" "}
          Select Start Year: {startYear}{" "}
        </Text>
        <Icon name="arrow-drop-down" size={20} color="black" />
      </TouchableOpacity>
      <Modal visible={isStartYearModalVisible} animationType="slide">
        <FlatList
          data={years}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectStartYear(item)}>
              <Text style={styles.yearItem}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </Modal>

      {/* Modal for end year */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsEndYearModalVisible(true)}
      >
        <Text styles={styles.dropdownButtonText}>
          {" "}
          Select End Year: {endYear}{" "}
        </Text>
        <Icon name="arrow-drop-down" size={20} color="black" />
      </TouchableOpacity>
      <Modal visible={isEndYearModalVisible} animationType="slide">
        <FlatList
          data={years}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectEndYear(item)}>
              <Text style={styles.yearItem}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </Modal>

      <FlatList
        data={filteredReferrals}
        keyExtractor={(item, index) => `${item.year}-${item.name}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MyReferralPage2", {
                year: item.year,
                name: item.name,
              })
            }
          >
            <Text style={styles.referralItem}>
              Your Referral for {item.year}: Given by {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Styles for MyReferralPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingLeft: 20,
  },
  dropdownButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 20,
  },
  dropdownButtonText: {
    fontSize: 18,
    textAlign: "left",
  },
  yearItem: {
    padding: 10,
    fontSize: 18,
  },
  referralItem: {
    padding: 10,
    fontSize: 14,
  },
});

export default MyReferralPage;
