import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FAB from "./FAB";
import { useUser } from "../context/UserContext";

export default function Home() {
  const { user, logout } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido, {user?.name} 👋</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <FAB label="Cerrar sesión" onPress={logout} backgroundColor="#292826" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0eae2",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
    color: "#555",
    marginBottom: 30,
  },
});
