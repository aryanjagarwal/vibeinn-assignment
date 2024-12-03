import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const KEYBOARD_HEIGHT = 400;

interface CustomNumericKeyboardProps {
  onKeyPress?: (key: string) => void;
  onDelete?: () => void;
}

export type NumericKeyboardRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const CustomNumericKeyboard = React.forwardRef<
  NumericKeyboardRefProps,
  CustomNumericKeyboardProps
>(({ onKeyPress, onDelete }, ref) => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);

  const scrollTo = useCallback((destination: number) => {
    "worklet";
    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -KEYBOARD_HEIGHT);
    })
    .onEnd(() => {
      if (translateY.value > -KEYBOARD_HEIGHT / 3) {
        scrollTo(0);
      } else {
        scrollTo(-KEYBOARD_HEIGHT);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [-KEYBOARD_HEIGHT + 50, -KEYBOARD_HEIGHT],
      [25, 5],
      { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  const renderKey = (key: string) => (
    <TouchableOpacity
      key={key}
      style={[styles.key, (key === "*" || key === "⌫") && styles.specialKey]}
      onPress={() => onKeyPress?.(key)}
    >
      <Text
        style={[
          styles.keyText,
          (key === "*" || key === "⌫") && styles.specialKeyText,
        ]}
      >
        {key === "⌫" ? "⌫" : key}
      </Text>
    </TouchableOpacity>
  );

  const keySize = (SCREEN_WIDTH - 48 - 32) / 5;

  const styles = StyleSheet.create({
    bottomSheetContainer: {
      height: KEYBOARD_HEIGHT,
      width: "100%",
      backgroundColor: "black",
      position: "absolute",
      top: SCREEN_HEIGHT,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    line: {
      width: 75,
      height: 4,
      backgroundColor: "#454545",
      alignSelf: "center",
      marginVertical: 15,
      borderRadius: 2,
    },
    keyboardContainer: {
      flex: 1,
      padding: 16,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    key: {
      width: keySize,
      height: keySize,
      borderRadius: 8,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },
    keyText: {
      color: "#fff",
      fontSize: 28,
      fontWeight: "400",
    },
    specialKey: {
      backgroundColor: "transparent",
    },
    specialKeyText: {
      fontSize: 24,
    },
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        <View style={styles.keyboardContainer}>
          <View style={styles.row}>{["1", "2", "3"].map(renderKey)}</View>
          <View style={styles.row}>{["4", "5", "6"].map(renderKey)}</View>
          <View style={styles.row}>{["7", "8", "9"].map(renderKey)}</View>
          <View style={styles.row}>
            <View style={[styles.key, styles.specialKey]}>
              <Text style={[styles.keyText, styles.specialKeyText]}>*</Text>
            </View>
            {renderKey("0")}
            <TouchableOpacity
              style={[styles.key, styles.specialKey]}
              onPress={onDelete}
            >
              <Text style={[styles.keyText, styles.specialKeyText]}>⌫</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
});

export default CustomNumericKeyboard;
