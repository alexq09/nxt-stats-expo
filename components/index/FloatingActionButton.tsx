import { Plus, Building2, Users } from "lucide-react-native";
import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface FloatingActionButtonProps {
  onAddOrganization: () => void;
  onAddTeam: () => void;
}

export default function FloatingActionButton({
  onAddOrganization,
  onAddTeam,
}: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = isExpanded ? 0 : 1;
    
    Animated.spring(animation, {
      toValue,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
    
    setIsExpanded(!isExpanded);
  };

  const handleOptionPress = (callback: () => void) => {
    callback();
    toggleMenu();
  };

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const organizationTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -70],
  });

  const teamTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -130],
  });

  const optionOpacity = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  const optionScale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  });

  return (
    <View style={styles.container}>
      {/* Add Team Option */}
      <Animated.View
        style={[
          styles.optionContainer,
          {
            transform: [
              { translateY: teamTranslateY },
              { scale: optionScale },
            ],
            opacity: optionOpacity,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionPress(onAddTeam)}
          activeOpacity={0.8}
        >
          <Users size={20} color="#3B82F6" />
        </TouchableOpacity>
        <Text style={styles.optionLabel}>Add New Team</Text>
      </Animated.View>

      {/* Add Organization Option */}
      <Animated.View
        style={[
          styles.optionContainer,
          {
            transform: [
              { translateY: organizationTranslateY },
              { scale: optionScale },
            ],
            opacity: optionOpacity,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleOptionPress(onAddOrganization)}
          activeOpacity={0.8}
        >
          <Building2 size={20} color="#3B82F6" />
        </TouchableOpacity>
        <Text style={styles.optionLabel}>Add New Organization</Text>
      </Animated.View>

      {/* Main FAB */}
      <TouchableOpacity
        style={styles.mainButton}
        onPress={toggleMenu}
        activeOpacity={0.8}
      >
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <Plus size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 20,
    alignItems: "center",
  },
  mainButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  optionContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 16,
  },
  optionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  optionLabel: {
    marginRight: 12,
    fontSize: 14,
    fontWeight: "500",
    color: "#1A1A1A",
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
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
  },
});