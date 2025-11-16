import React, { useState } from "react";
import { View, TextInput, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import FAB from "./FAB";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  const handleLogin = () => {
    if (!correo || !password) {
      Alert.alert("Error", "Por favor ingresa correo y contraseña");
      return;
    }

    if (correo === "demo@correo.com" && password === "1234") {
      login({ name: nombre || "Usuario", email: correo });
    } else {
      Alert.alert("Credenciales incorrectas", "Intenta con demo@correo.com / 1234");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
        style={styles.avatar}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#fff"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo"
        placeholderTextColor="#fff"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="************"
        placeholderTextColor="#fff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botón Google con color igual al de los cajones */}
      <FAB label="Sign in with Google" backgroundColor="#292826" />

      {/* Botón de iniciar sesión */}
      <FAB label="Iniciar Sesión" onPress={handleLogin} backgroundColor="#292826" />

      {/* Enlaces inferiores */}
      <View style={styles.linksContainer}>
        <Text style={styles.link}>Olvidaste tu contraseña</Text>
        <Text style={styles.link}>Registrarse</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0eae2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "#292826",
    color: "white",
    marginVertical: 6,
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 25,
  },
  link: {
    color: "black",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
