import React from "react";
import { View, StyleSheet } from "react-native";
import { UserProvider, useUser } from "./context/UserContext";
import Login from "./src/components/login";
import Home from "./src/components/Home";
import HomeScreen from "./src/components/HomeScreen";

function MainApp() {
  const { user } = useUser();
  return <View style={styles.container}>{user ? <HomeScreen /> : <Login />}</View>;
}

export default function App() {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
