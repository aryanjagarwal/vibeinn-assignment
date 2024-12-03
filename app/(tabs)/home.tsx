import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../../components/PostCard";
import PostCard2 from "@/components/PostCard2";
import persons from "../../utils/persons";
import StoriesSection from "@/components/StoriesSection";
import SelectDropdown from "react-native-select-dropdown";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const pickerSelector = [
  { label: "Anyone", value: "anyone", icon: "account-outline" },
  { label: "Friends", value: "friends", icon: "account-multiple-outline" },
  {
    label: "Close Friends",
    value: "closeFriends",
    icon: "account-heart-outline",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://imgcdn.stablediffusionweb.com/2024/9/27/46e91118-0af8-4735-8859-117ffcbee3bd.jpg",
            }}
            style={styles.profileImage}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.username}>User name</Text>
            <Text style={styles.subText}>Gladiator</Text>
          </View>
          <View style={styles.headerIcons}>
            <Ionicons name="search-outline" size={24} color="white" />
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={24}
              color="white"
            />
          </View>
        </View>
        <StoriesSection />
        <View style={styles.vibeSelector}>
          <Text style={styles.vibeText}>Start Vibe on</Text>
          <View style={styles.vibeIcons}>
            <Text style={styles.vibeIconText}>⋅</Text>
            <Text style={styles.vibeIconText1}>⋅</Text>
            <Text style={styles.vibeIconText2}>⋅</Text>
            <Text style={styles.vibeIconText3}>⋅</Text>
            <Text style={styles.vibeIconText4}>⋅</Text>
            <Text style={styles.vibeIconText5}>⋅</Text>
          </View>
          <SelectDropdown
            data={pickerSelector}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  {selectedItem && (
                    <MaterialCommunityIcons
                      name={selectedItem.icon}
                      style={styles.dropdownButtonIconStyle}
                    />
                  )}
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.label) || "Anyone"}
                  </Text>
                  <MaterialCommunityIcons
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    style={styles.dropdownButtonArrowStyle}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <MaterialCommunityIcons
                    name={item.icon}
                    style={styles.dropdownItemIconStyle}
                  />
                  <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
        </View>
        <PostCard />
        <PostCard2 />
        <PostCard />
        <PostCard2 />
        <PostCard />
        <PostCard2 />
        <PostCard />
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
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    color: "#FFF",
    fontWeight: "bold",
  },
  subText: {
    color: "#AAA",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 15,
    marginRight: 10,
  },
  storiesContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  story: {
    alignItems: "center",
    marginRight: 10,
  },
  storyImageWrapper: {
    position: "relative",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 5,
    alignItems: "center",
  },
  storyOverlayText: {
    color: "#FFF",
    fontSize: 10,
  },
  vibeSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
    borderWidth: 1,
    borderColor: "#FF3503",
    borderRadius: 20,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.62,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
    marginBottom: 15,
  },
  vibeIcons: {
    flexDirection: "row",
  },
  vibeIconText: {
    color: "#F2B33C",
    fontSize: 25,
  },
  vibeIconText1: {
    color: "#F4A435",
    fontSize: 25,
  },
  vibeIconText2: {
    color: "#F7932D",
    fontSize: 25,
  },
  vibeIconText3: {
    color: "#F78427",
    fontSize: 25,
  },
  vibeIconText4: {
    color: "#F96B1C",
    fontSize: 25,
  },
  vibeIconText5: {
    color: "#FF3503",
    fontSize: 25,
  },
  vibeText: {
    color: "#FFF",
  },
  dropdownButtonStyle: {
    width: 100,
    height: 25,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  dropdownButtonIconStyle: {
    fontSize: 20,
    color: "#FFF",
  },
  dropdownButtonTxtStyle: {
    fontSize: 16,
    color: "#FFF",
    marginLeft: 10,
  },
  dropdownButtonArrowStyle: {
    fontSize: 20,
    color: "#FFF",
  },
  dropdownItemStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownItemIconStyle: {
    fontSize: 20,
    color: "#333",
  },
  dropdownItemTxtStyle: {
    fontSize: 16,
    color: "#333",
  },
  dropdownMenuStyle: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    width: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
