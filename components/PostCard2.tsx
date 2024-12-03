import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import persons from "../utils/persons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const MiniProfileCircles = () => {
  return (
    <View style={styles.miniProfileCircles}>
      {persons.slice(0, 3).map((person, index) => (
        <Image
          key={index}
          source={{ uri: person.avatar }}
          style={[
            styles.miniProfileCircle,
            { marginLeft: index === 0 ? 0 : -10 },
          ]}
        />
      ))}
    </View>
  );
};

const PostCard2 = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/76/d3/bd/76d3bdb7639b51d1e81419d6c66eff65.jpg",
          }}
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.username}>Anonymous</Text>
          <Text style={styles.subText}>
            Is Vibeinn on <Text style={styles.highlight}>Sports</Text>
          </Text>
        </View>
        <Text style={styles.timeText}>2h 30m</Text>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteButtonText}>Chat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>
          Share your interest, passions, and hobbies. We’ll connect you with
          people who share your enthusiasm.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <FontAwesome name="hand-peace-o" size={24} color="white" />
          <Text style={styles.footerText}>50k</Text>
        </View>
        <View style={styles.footerIcons}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
          <Text style={styles.footerText}>20k</Text>
        </View>
        <View style={styles.footerIcons}>
          <Ionicons name="paper-plane-outline" size={24} color="white" />
          <Text style={styles.footerText}>10</Text>
        </View>
        <View style={styles.footerIcons}>
          <Ionicons name="eye-outline" size={24} color="white" />
          <Text style={styles.footerText}>333k</Text>
        </View>
        <View style={styles.footerIcons}>
          <Ionicons name="mail-outline" size={24} color="white" />
          <MiniProfileCircles />
          <Text style={styles.footerText}>45</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#000",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#454545",
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  username: {
    color: "#FFF",
    fontWeight: "bold",
  },
  subText: {
    color: "#AAA",
    fontSize: 10,
  },
  highlight: {
    color: "#589BFF",
  },
  timeText: {
    color: "#AAA",
    fontSize: 10,
    marginRight: 30,
  },
  inviteButton: {
    backgroundColor: "#975CFD",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  inviteButtonText: {
    color: "#FFF",
  },
  contentContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  contentContainerBackground: {
    backgroundColor: "#589BFF",
    padding: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
  },
  mainText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "500",
  },
  subContentText: {
    color: "#FFD700",
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    gap: 7,
  },
  footerText: {
    color: "#FFF",
    marginLeft: 5,
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  miniProfileCircles: {
    flexDirection: "row",
    alignItems: "center",
  },
  miniProfileCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
});

export default PostCard2;
