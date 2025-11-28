import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { getStyles } from "../styles/homeStyles";
import { useTheme } from "../../context/ThemeContext";

export default function CTASection() {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.ctaContainer}>

      {/* IZQUIERDA */}
      <View style={styles.ctaLeft}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.ctaLogo}
          resizeMode="contain"
        />

        <Text style={styles.ctaHeadline}>
          Organiza tus ingresos y gastos{"\n"}de manera simple.
        </Text>

        <Text style={styles.ctaSubheadline}>
          Empieza a ahorrar hoy mismo y alcanza tus metas familiares sin estrés.
        </Text>

        <View>
          <Text style={styles.ctaBenefit}>• 100% gratis y fácil de usar</Text>
          <Text style={styles.ctaBenefit}>• Controla tus finanzas familiares</Text>
          <Text style={styles.ctaBenefit}>• Visualiza tus avances al instante</Text>
          <Text style={styles.ctaBenefit}>• Tus datos siempre seguros</Text>
        </View>

        <View style={styles.ctaButtonContainer}>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Crear mi cuenta gratis</Text>
          </TouchableOpacity>

          <Text style={styles.ctaClickText}>↑</Text>
          <Text style={styles.ctaClickText}>Click Aquí</Text>
        </View>
      </View>

      {/* DERECHA */}
      <View style={styles.ctaRight}>
        <Image
          source={require("../../assets/dinero.png")}
          style={styles.ctaBanner}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
