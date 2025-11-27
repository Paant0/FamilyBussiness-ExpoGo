import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { styles } from "../styles/homeStyles";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

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
    <ScrollView style={styles.container}>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />

      <View style={styles.ctaFinal}>
  <Text style={styles.ctaTitle}>
    Comienza tu viaje hacia una vida financiera más estable
  </Text>
  <Text style={styles.ctaText}>
    Regístrate hoy y descubre lo fácil que es administrar tu dinero.
  </Text>
</View>

    </ScrollView>
  );
}
