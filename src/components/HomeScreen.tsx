import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import { styles } from "../styles/homeStyles";
import { CTASection } from "./CTASection";
import FAB from "./FAB";
import { useUser } from "../../context/UserContext";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const { user, logout } = useUser();

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
      <CTASection />
      <View style={styles.ctaFinal}>
        <FAB label="Cerrar sesión" onPress={logout} backgroundColor="#292826" />
      </View>
    </ScrollView>
  );
}
