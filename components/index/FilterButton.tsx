import { SlidersHorizontal } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// interface FilterButtonProps {
//   onPress: () => void;
// }

export default function FilterButton() {
  return (
    // <TouchableOpacity style={styles.container} onPress={onPress}>
    <TouchableOpacity style={styles.container}>
      <SlidersHorizontal size={20} color="#5E5D5E" />
      <Text style={styles.text}>Filter</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minWidth: 80,
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "500",
  },
});
