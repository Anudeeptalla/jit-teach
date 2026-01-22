import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FeedbackScreen() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Did this help?</Text>

      <TouchableOpacity
        style={styles.buttonGood}
        onPress={() => {
          setMessage("Feedback received: Worked");
        }}
      >
        <Text style={styles.buttonText}>Worked</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonMid}
        onPress={() => {
          setMessage("Feedback received: Partially worked");
        }}
      >
        <Text style={styles.buttonText}>Partially worked</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonBad}
        onPress={() => {
          setMessage("Feedback received: Did not work");
        }}
      >
        <Text style={styles.buttonText}>Did not work</Text>
      </TouchableOpacity>

      {/* 👇 THIS WAS MISSING — message display */}
      {message !== "" && (
        <Text style={styles.message}>{message}</Text>
      )}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.backText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  buttonGood: {
    backgroundColor: "#16a34a",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonMid: {
    backgroundColor: "#f59e0b",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonBad: {
    backgroundColor: "#dc2626",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  message: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "#000000",
    fontWeight: "500",
  },
  backButton: {
    padding: 10,
    marginTop: 10,
  },
  backText: {
    textAlign: "center",
    color: "#2563eb",
    fontSize: 15,
  },
});
