import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const rewardsData = [
  { id: 1, title: "Daily Login", points: 50, icon: "calendar" },
  { id: 2, title: "Invite Friends", points: 100, icon: "people" },
  { id: 3, title: "Complete Profile", points: 150, icon: "person" },
  { id: 4, title: "First Post", points: 200, icon: "create" },
];

const Rewards = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Rewards</Text>
          <Ionicons name="gift" size={24} color="#0066FF" />
        </View>

        <View style={styles.rewardsContainer}>
          {rewardsData.map((reward) => (
            <View key={reward.id} style={styles.rewardCard}>
              <Ionicons name={reward.icon} size={40} color="#FFF" />
              <View style={styles.rewardTextContainer}>
                <Text style={styles.rewardTitle}>{reward.title}</Text>
                <Text style={styles.rewardPoints}>{reward.points} Points</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  rewardsContainer: {
    flexDirection: "column",
  },
  rewardCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151515",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  rewardTextContainer: {
    marginLeft: 16,
  },
  rewardTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  rewardPoints: {
    color: "#0066FF",
    fontSize: 16,
  },
});

export default Rewards;
