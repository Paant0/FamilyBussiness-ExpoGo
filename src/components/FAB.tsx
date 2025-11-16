import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  label: string;              // Texto del botón
  onPress?: () => void;       // Acción al presionar
  backgroundColor?: string;   // Color personalizable
}

export default function FAB({ label, onPress, backgroundColor = "#292826" }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed ? { opacity: 0.8 } : { opacity: 1 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 6,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
