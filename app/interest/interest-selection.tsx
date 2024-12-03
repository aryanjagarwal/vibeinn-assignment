import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const interests = [
  "Travel ✈️",
  "Cooking 🍳",
  "Hiking 🏔️",
  "Yoga 🧘‍♀️",
  "Gaming 🎮",
  "Movies 🎥",
  "Photography 📷",
  "Music 🎵",
  "Pets 🐶",
  "Painting 🎨",
  "Art 🎨",
  "Fitness 🏋️‍♀️",
  "Reading 📚",
  "Dancing 💃",
  "Sports 🏀",
  "Board games 🎲",
  "Technology 👨‍💻",
  "Fashion 👗",
  "Web3 🌐",
];

const InterestSelection = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const router = useRouter();

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["transparent", "transparent", "#0066FF"]}
        style={StyleSheet.absoluteFill}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Discover your Interest</Text>
        <Text style={styles.emojis}>😋 🤩 😜 🤫</Text>
        <Text style={styles.description}>
          Share your interest, passions, and hobbies. We'll connect you with
          people who share your enthusiasm.
        </Text>
        <TextInput style={styles.searchBar} placeholder="Search Interest" />
        <View style={styles.interestsContainer}>
          {interests.map((interest, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.interestButton,
                selectedInterests.includes(interest) &&
                  styles.selectedInterestButton,
              ]}
              onPress={() => toggleInterest(interest)}
            >
              <Text style={styles.interestText}>{interest}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.shadowContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => router.replace("/(tabs)/home")}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    marginVertical: 10,
  },
  emojis: {
    fontSize: 45,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#AAA",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBar: {
    width: "100%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#222",
    color: "#FFF",
    marginBottom: 20,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  interestButton: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10,
    margin: 5,
  },
  selectedInterestButton: {
    backgroundColor: "#589BFF",
  },
  interestText: {
    color: "#000",
  },
  shadowContainer: {
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: "#589BFF",
    width: "80%",
    alignItems: "center",
  },
  continueButton: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#589BFF",
  },
  continueButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  gradientBackground: {
    height: "30%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
});

export default InterestSelection;
