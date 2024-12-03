import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface CustomOtpEntryProps {
  numberOfDigits?: number;
  value?: string;
  onTextChange?: (text: string) => void;
  onFilled?: (code: string) => void;
  containerStyle?: ViewStyle;
  cellStyle?: ViewStyle;
  cellTextStyle?: TextStyle;
  focusedCellStyle?: ViewStyle;
}

export interface CustomOtpEntryRef {
  setValue: (value: string) => void;
}

const CustomOtpEntry = forwardRef<CustomOtpEntryRef, CustomOtpEntryProps>(
  (
    {
      numberOfDigits = 4,
      value = "",
      onTextChange,
      onFilled,
      containerStyle,
      cellStyle,
      cellTextStyle,
      focusedCellStyle,
    },
    ref
  ) => {
    const [otp, setOtp] = useState(value);

    useImperativeHandle(ref, () => ({
      setValue: (newValue: string) => {
        setOtp(newValue);
        onTextChange?.(newValue);
        if (newValue.length === numberOfDigits) {
          onFilled?.(newValue);
        }
      },
    }));

    const renderCell = (index: number) => {
      const digit = otp[index] || "";
      const isFocused = index === otp.length;

      return (
        <View
          key={index}
          style={[
            styles.cell,
            cellStyle,
            isFocused && styles.focusedCell,
            isFocused && focusedCellStyle,
          ]}
        >
          <Text style={[styles.cellText, cellTextStyle]}>{digit}</Text>
          {isFocused && <View style={styles.cursor} />}
        </View>
      );
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {Array.from({ length: numberOfDigits }).map((_, index) =>
          renderCell(index)
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  cell: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#151515",
    borderWidth: 1,
    borderColor: "#252525",
    justifyContent: "center",
    alignItems: "center",
  },
  focusedCell: {
    borderColor: "#589BFF",
  },
  cellText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
  cursor: {
    position: "absolute",
    bottom: 10,
    width: 24,
    height: 2,
    backgroundColor: "#589BFF",
  },
});

export default CustomOtpEntry;
