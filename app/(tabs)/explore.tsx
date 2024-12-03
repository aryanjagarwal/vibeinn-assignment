import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import StoriesSection from "@/components/StoriesSection";
import PostCard from "@/components/PostCard";
import PostCard2 from "@/components/PostCard2";

const categories = [
  "All",
  "Sports",
  "Music",
  "Gaming",
  "Art",
  "Food",
  "Travel",
  "Tech",
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search interests, people, or posts"
          placeholderTextColor="#666"
        />
        <TouchableOpacity>
          <Ionicons name="filter" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Stories Section */}
        <StoriesSection />

        {/* Posts Feed */}
        <View style={styles.feedContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Explore New Vibes</Text>
          </View>
          <PostCard />
          <PostCard2 />
          <PostCard />
          <PostCard2 />
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#151515",
    margin: 16,
    padding: 10,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#151515",
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: "#E5EA00",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
  },
  selectedCategoryText: {
    color: "#000",
    fontWeight: "600",
  },
  feedContainer: {
    padding: 16,
  },
  sectionHeader: {
    marginVertical: 16,
  },
  sectionHeaderText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Explore;
