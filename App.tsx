import React from "react";
import { View, StyleSheet } from "react-native";
import { UserProvider, useUser } from "./context/UserContext";
import Login from "./src/components/login";
import HomeScreen from "./src/components/HomeScreen";
import { ThemeProvider } from "./context/ThemeContext";

function MainApp() {
  const { user } = useUser();
  return <View style={styles.container}>{user ? <HomeScreen /> : <Login />}</View>;
}

export default function App() {
  return (
    <UserProvider>
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
