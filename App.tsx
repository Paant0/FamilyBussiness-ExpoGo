import React from "react";
import { View, StyleSheet } from "react-native";
import { UserProvider, useUser } from "./context/UserContext";
import Home from "./components/Home";
import Login from "./components/login";

function MainApp() {
  const { user } = useUser();
  return <View style={styles.container}>{user ? <Home /> : <Login />}</View>;
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
