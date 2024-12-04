import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CustomOtpEntry from "@/components/CustomOtpEntry";
import CustomNumericKeyboard, {
  NumericKeyboardRefProps,
} from "@/components/CustomNeumericKeyboard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const OTPVerification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const otpRef = useRef<any>();
  const bottomSheetRef = useRef<NumericKeyboardRefProps>(null);
  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();

  const handleVerify = () => {
    if (otp.length === 4) {
      router.replace("/interest/interest-selection");
    }
  };

  const handleKeyPress = useCallback(
    (key: string) => {
      console.log("Key pressed:", key);
      if (otp.length < 4) {
        const newOtp = otp + key;
        setOtp(newOtp);
        otpRef.current?.setValue(newOtp);
        console.log("New OTP:", newOtp);
      }
    },
    [otp]
  );

  const handleDelete = useCallback(() => {
    console.log("Delete pressed, current OTP:", otp);
    if (otp.length > 0) {
      const newOtp = otp.slice(0, -1);
      setOtp(newOtp);
      otpRef.current?.setValue(newOtp);
      console.log("New OTP after delete:", newOtp);
    }
  }, [otp]);

  const showKeyboard = useCallback(() => {
    const isActive = bottomSheetRef.current?.isActive();
    if (isActive) {
      bottomSheetRef.current?.scrollTo(0);
    } else {
      bottomSheetRef.current?.scrollTo(-300);
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleResend = () => {
    if (timeLeft === 0) {
      setTimeLeft(30);
      // resend OTP logic
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#151515", "#000000"]}
          style={styles.baseGradient}
        />
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>OTP code verification</Text>
          <Text style={styles.subtitle}>
            We have sent you an SMS with the code to +91
            {phoneNumber}
          </Text>

          <TouchableOpacity style={styles.otpContainer} onPress={showKeyboard}>
            <CustomOtpEntry
              ref={otpRef}
              numberOfDigits={4}
              value={otp}
              onTextChange={(text) => {
                console.log("OTP changed:", text);
                setOtp(text);
              }}
              onFilled={(code) => {
                console.log("OTP filled:", code);
                if (code.length === 4) {
                  handleVerify();
                }
              }}
            />
          </TouchableOpacity>
          <Text style={styles.didNotGetOtp}>Didn't get OTP?</Text>
          <TouchableOpacity
            onPress={handleResend}
            style={styles.resendContainer}
            disabled={timeLeft > 0}
          >
            <Text
              style={[
                styles.resendText,
                timeLeft > 0 && styles.resendTextDisabled,
              ]}
            >
              {timeLeft > 0
                ? `You can resend code in ${timeLeft}s`
                : "Resend Code"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.verifyButton, otp.length !== 4 && { opacity: 0.7 }]}
          onPress={handleVerify}
          disabled={otp.length !== 4}
        >
          <LinearGradient
            colors={["#589BFF", "#4B83FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.verifyButtonGradient}
          >
            <Text style={styles.verifyButtonText}>Verify</Text>
          </LinearGradient>
        </TouchableOpacity>

        <CustomNumericKeyboard
          ref={bottomSheetRef}
          onKeyPress={handleKeyPress}
          onDelete={handleDelete}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    position: "relative",
  },
  baseGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
    opacity: 0.8,
  },
  otpContainer: {
    marginTop: 32,
    marginBottom: 32,
  },
  verifyButton: {
    marginHorizontal: 60,
    marginBottom: 60,
    borderRadius: 30,
    shadowColor: "#589BFF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
  },
  verifyButtonGradient: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  didNotGetOtp: {
    color: "#fff",
    fontSize: 16,
    textAlign: "left",
    opacity: 0.8,
    marginBottom: 8,
  },
  resendContainer: {
    marginBottom: 24,
  },
  resendText: {
    color: "#589BFF",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "600",
  },
  resendTextDisabled: {
    color: "#ffffff80",
  },
  backButton: {
    position: "absolute",
    top: -30,
    left: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OTPVerification;
