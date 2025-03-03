import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.userName}>Tuan Long</Text>
        </View>
        <Image source={{ uri: "https://via.placeholder.com/50" }} style={styles.avatar} />
      </View>

      {/* Insights Section */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insightsGrid}>
        {insightsData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.insightBox, { backgroundColor: item.bgColor }]}
            onPress={() => {
              if (item.title === "Scan new") navigation.navigate("Scan");
            }}
          >
            <Ionicons name={item.icon} size={30} color={item.color} />
            <Text style={styles.insightTitle}>{item.title}</Text>
            <Text style={styles.insightSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Data
const insightsData = [
  { title: "Scan new", subtitle: "Scanned 483", icon: "scan", color: "#6366F1", bgColor: "#EEF2FF" },
  { title: "Counterfeits", subtitle: "Counterfeited 32", icon: "alert-circle", color: "#F97316", bgColor: "#FEF3C7" },
  { title: "Success", subtitle: "Checkouts 8", icon: "checkmark-circle", color: "#10B981", bgColor: "#ECFDF5" },
  { title: "Directory", subtitle: "History 26", icon: "calendar", color: "#3B82F6", bgColor: "#DBEAFE" },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20, paddingTop: 50 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  userInfo: { flexDirection: "column" },
  greeting: { fontSize: 16, color: "#6B7280" },
  userName: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827", marginTop: 20 },
  insightsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 10 },
  insightBox: { width: "48%", padding: 15, borderRadius: 15, alignItems: "center", marginBottom: 10 },
  insightTitle: { fontSize: 14, fontWeight: "bold", color: "#111827", marginTop: 5 },
  insightSubtitle: { fontSize: 12, color: "#6B7280" },
});

export default HomeScreen;
