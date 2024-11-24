import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import FiDash from "@/components/FiDash";

export default function home() {
  return (
    <View style={styles.container}>
      <FiDash></FiDash>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
