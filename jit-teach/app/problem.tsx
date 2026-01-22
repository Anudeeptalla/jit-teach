import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProblemScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What problem are you facing?</Text>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push({ pathname: "/suggestion", params: { problem: "disengaged" } })}>
        <Text style={styles.buttonText}>Students disengaged</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push({ pathname: "/suggestion", params: { problem: "concept" } })}>
        <Text style={styles.buttonText}>Concept not understood</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push({ pathname: "/suggestion", params: { problem: "mixed" } })}>
        <Text style={styles.buttonText}>Mixed learning levels</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push({ pathname: "/suggestion", params: { problem: "noisy" } })}>
        <Text style={styles.buttonText}>Class too noisy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push({ pathname: "/suggestion", params: { problem: "time" } })}>
        <Text style={styles.buttonText}>Time running out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});
