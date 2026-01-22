import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function SuggestionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ problem?: string }>();
  const [suggestion, setSuggestion] = useState("Loading...");

  useEffect(() => {
    fetch("http://10.71.136.217:8000/suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ problem: params.problem }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuggestion(data.suggestion);
      })
      .catch(() => {
        setSuggestion("Unable to fetch suggestion");
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested Action</Text>
      <Text style={styles.box}>{suggestion}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/feedback")}
      >
        <Text style={styles.buttonText}>Give Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  box: {
    fontSize: 16,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});
