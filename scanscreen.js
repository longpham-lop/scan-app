import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Image Scanner */}
      <View style={styles.scanBox}>
        <Image source={{ uri: "https://tse1.mm.bing.net/th?id=OIP.av-DaoCueS5_JyX1ZQzkggHaHa&pid=Api&P=0&h=180" }} style={styles.productImage} />
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.owner}>Lauren’s</Text>
        <Text style={styles.productName}>Orange Juice</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFC", alignItems: "center", justifyContent: "center" },
  backButton: { position: "absolute", top: 50, left: 20, backgroundColor: "white", padding: 10, borderRadius: 10 },
  backText: { fontSize: 18 },
  scanBox: { width: 300, height: 400, justifyContent: "center", alignItems: "center", backgroundColor: "#EAEAEA", borderRadius: 20 },
  productImage: { width: "100%", height: "100%", resizeMode: "cover", borderRadius: 20 },
  productInfo: { position: "absolute", bottom: 50, backgroundColor: "white", padding: 20, borderRadius: 20, alignItems: "center" },
  owner: { fontSize: 14, color: "gray" },
  productName: { fontSize: 18, fontWeight: "bold" },
});

export default ScanScreen;
