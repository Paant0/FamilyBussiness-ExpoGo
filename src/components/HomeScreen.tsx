import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import { getStyles } from "../styles/homeStyles";
import FAB from "./FAB";
import { useUser } from "../../context/UserContext";
import Caracteristicas from "./caracteristicas";
import CTASection from "./CTASection";
import { useTheme } from "../../context/ThemeContext";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();
  const styles = getStyles(theme);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7cd18d" />
        <Text style={{ marginTop: 10, color: "#333" }}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#7cd18d",
          padding: 10,
          margin: 20,
          borderRadius: 10,
        }}
        onPress={toggleTheme}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Cambiar a modo {theme === "light" ? "oscuro" : "claro"}
        </Text>
      </TouchableOpacity>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Caracteristicas />
      <CTASection />

      <View style={styles.ctaFinal}>
        <FAB label="© 2025 FamilyBusiness. Todos los derechos reservados" />

        <FAB
          label="Cerrar sesión"
          onPress={logout}
          backgroundColor="#292826"
        />
      </View>
    </ScrollView>
  );
}
