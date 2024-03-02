import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// { date: "April 1, 2024", year: "2024", name: "Dr. Miranda Bailey", status: "Accepted", statusDate: "April 10, 2024" },
const MyReferralPage2 = ({ route }) => {
  const { year, name, date, status, statusDate } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.bigText}>Your Referral for: {name}</Text>
        <Text style={styles.bigText}>Received on: {date}</Text>
        <Text style={styles.bigText}>Status: {status}</Text>
        {status === "Accepted" && (
          <Text style={styles.bigText}>Accepted on: {statusDate}</Text>
        )}
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/referral.webp")}
          resizeMode="contain"
        />
        <Text style={styles.imageText}>Copy of Faxed Referral: {name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start", // Align items to the start
    justifyContent: "flex-start", // Content justified to the start
    paddingTop: 20,
    paddingHorizontal: 20, // Add horizontal padding
  },
  infoContainer: {
    marginBottom: 20, // Space between the text and the image
  },
  bigText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10, // Spacing between each text element
  },
  text: {
    fontSize: 18,
    marginBottom: 5, // Spacing between each text element
  },
  imageContainer: {
    flex: 1, // Take up remaining space
    width: "100%", // Image container takes full width
    justifyContent: "center", // Center image vertically
    alignItems: "center", // Center image horizontally
  },
  image: {
    width: "100%", // Image takes full width of its container
    height: undefined,
    aspectRatio: 1, // Keep the aspect ratio of the image, adjust this as needed
  },
  imageText: {
    fontSize: 16,
    textAlign: "center", // Center text below the image
    marginTop: 10, // Spacing between image and text
  },
});

export default MyReferralPage2;
