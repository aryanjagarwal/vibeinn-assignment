import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import persons from "../utils/persons";
import { LinearGradient } from "expo-linear-gradient";

const StoriesSection = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.storiesContainer}
    >
      <View style={styles.story}>
        <View style={[styles.storyImageWrapper, styles.vibeinnStory]}>
          <Text style={styles.vibeinnText}>+</Text>
          <Text style={styles.vibeinnText}>STORY VIBEINN</Text>
        </View>
      </View>
      {persons.map((person, index) => (
        <View key={index} style={styles.story}>
          <View style={styles.storyImageWrapper}>
            <Image source={{ uri: person.avatar }} style={styles.storyImage} />
            <LinearGradient
              colors={["transparent", "#7C3AED"]}
              style={styles.storyOverlay}
            >
              <Text style={styles.storyOverlayText}>
                {person.name}, {person.age}
              </Text>
              <Text style={styles.storyOverlayText}>{person.location}</Text>
            </LinearGradient>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  story: {
    alignItems: "center",
    marginRight: 15,
    width: 70,
    height: 100,
  },
  storyImageWrapper: {
    position: "relative",
    borderRadius: 35,
    overflow: "hidden",
    width: 70,
    height: 100,
  },
  vibeinnStory: {
    backgroundColor: "#0066FF",
    width: 70,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  vibeinnText: {
    color: "#FFF",
    fontSize: 10,
    textAlign: "center",
  },
  storyImage: {
    width: 70,
    height: 100,
  },
  storyOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    alignItems: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  storyOverlayText: {
    color: "#FFF",
    fontSize: 10,
  },
});

export default StoriesSection;
