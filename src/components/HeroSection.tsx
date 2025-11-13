import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/homeStyles";

export default function HeroSection() {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.heroSection}>
      <View style={styles.heroText}>
        <Text style={styles.heroTitle}>FamilyBusiness</Text>
        <Text style={styles.heroSubtitle}>
          Organiza tus finanzas familiares de forma fácil y segura 💰
        </Text>
        <Text style={styles.heroDescription}>
          FamilyBusiness ayuda a personas entre 36 y 45 años a tomar el control
          de sus ingresos y gastos, logrando una economía familiar más organizada
          y libre de deudas.
        </Text>

        <TouchableOpacity
          style={[styles.btnPrimary, pressed && styles.btnPressed]}
          onPress={() => setPressed(!pressed)}
        >
          <Text style={styles.btnPrimaryText}>
            {pressed ? "¡Listo!🚀" : "Comienza gratis"}
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../../assets/familia.jpg")}
        style={styles.heroImage}
      />
    </View>
  );
}
