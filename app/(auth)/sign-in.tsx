import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SignIn = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    // Basic validation for 10-digit phone number
    if (
      !phoneNumber ||
      phoneNumber.length !== 10 ||
      !/^\d+$/.test(phoneNumber)
    ) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number"
      );
      return;
    }

    router.push("/(auth)/otpVerification");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background layers */}
      <LinearGradient
        colors={["#000000", "#000000"]}
        style={styles.baseGradient}
      />
      <View style={styles.overlayContainer}>
        <Image
          source={require("../../assets/images/blue-gradient.png")}
          style={styles.gradientImage}
          resizeMode="cover"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Get started with{"\n"}your number</Text>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={styles.countryCodeText}>🇺🇸 +91</Text>
            <Ionicons name="chevron-down" size={20} color="#fff" />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#B3B3B3"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !phoneNumber && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!phoneNumber}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity
          style={styles.gmailButton}
          onPress={() => {
            router.push("/(auth)/otpVerification");
          }}
        >
          <Ionicons
            name="mail"
            size={20}
            color="white"
            style={styles.gmailIcon}
          />
          <Text style={styles.gmailButtonText}>Gmail</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to the{" "}
          <Text style={styles.link}>terms of use</Text>{" "}
          <Text style={styles.link}>privacy policy</Text> and{" "}
          <Text style={styles.link}>community guidelines</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  baseGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlayContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
  },
  gradientImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  countryCode: {
    backgroundColor: "#151515",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  countryCodeText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#151515",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#fff",
  },
  continueButton: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "#E5EA00",
    shadowColor: "#E5EA00",
    shadowOpacity: 1,
    borderRadius: 30,
    paddingVertical: 16,
    marginBottom: 24,
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  orText: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 24,
  },
  gmailButton: {
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "#FF8039",
    shadowColor: "#FF8039",
    shadowOpacity: 1,
    borderRadius: 30,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  gmailIcon: {
    marginRight: 4,
  },
  gmailButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  termsText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
    position: "absolute",
    bottom: 40,
    left: 24,
    right: 24,
  },
  link: {
    textDecorationLine: "underline",
  },
});

export default SignIn;
