import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ICONS = {
  home: "home",
  vibeinn: "heart",
  explore: "compass",
  profile: "person",
  rewards: "gift",
};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || options.title || route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={[styles.tab, isFocused && styles.activeTab]}
            >
              <View
                style={[
                  styles.iconContainer,
                  isFocused && styles.activeIconContainer,
                ]}
              >
                {route.name === "home" ? (
                  <Image
                    source={require("../assets/images/home.png")}
                    style={{ width: 24, height: 24 }}
                  />
                ) : route.name === "vibeinn" ? (
                  <Image
                    source={require("../assets/images/v-icon.png")}
                    style={{ width: 24, height: 24 }}
                  />
                ) : (
                  <Ionicons
                    name={ICONS[route.name as keyof typeof ICONS] as any}
                    size={24}
                    color={isFocused ? "#589BFF" : "#FFF"}
                  />
                )}
              </View>
              <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {label.toString().split("/").pop()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: 100,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: SCREEN_WIDTH - 40,
    marginHorizontal: 20,
    borderRadius: 32,
    height: 80,
    marginBottom: 0,
    paddingHorizontal: 16,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#1E1E1E",
    borderRadius: 32,
    padding: 10,
  },
  iconContainer: {
    marginBottom: 4,
  },
  activeIconContainer: {
    backgroundColor: "black",
    borderRadius: 16,
    padding: 8,
  },
  label: {
    color: "#FFF",
    fontSize: 12,
  },
  activeLabel: {
    color: "#386BF6",
  },
});

export default CustomTabBar;
