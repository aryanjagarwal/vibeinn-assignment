import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const ProfileStats = [
  { label: "Followers", value: "10.5K" },
  { label: "Following", value: "1.2K" },
  { label: "Posts", value: "256" },
];

const Interests = ["Gaming", "Music", "Travel", "Sports", "Tech"];

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/76/d3/bd/76d3bdb7639b51d1e81419d6c66eff65.jpg",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>Aryan</Text>
          <Text style={styles.bio}>Living life one vibe at a time 🌟</Text>
          <View style={styles.statsContainer}>
            {ProfileStats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interestsContainer}>
            {Interests.map((interest, index) => (
              <View key={index} style={styles.interestTag}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsList}>
            {[
              { icon: "wallet-outline", label: "My Wallet" },
              { icon: "gift-outline", label: "Rewards" },
              { icon: "bookmark-outline", label: "Saved Posts" },
              { icon: "shield-checkmark-outline", label: "Privacy" },
            ].map((action, index) => (
              <TouchableOpacity key={index} style={styles.actionItem}>
                <Ionicons name={action.icon} size={24} color="#FFF" />
                <Text style={styles.actionLabel}>{action.label}</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: "#999",
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  editButton: {
    backgroundColor: "#151515",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5EA00",
  },
  editButtonText: {
    color: "#E5EA00",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
    marginBottom: 12,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  interestTag: {
    backgroundColor: "#151515",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  interestText: {
    color: "#FFF",
    fontSize: 14,
  },
  actionsList: {
    backgroundColor: "#151515",
    borderRadius: 12,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  actionLabel: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#FFF",
  },
});

export default Profile;
