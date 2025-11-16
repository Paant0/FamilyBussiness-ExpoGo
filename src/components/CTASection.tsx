import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { homeStyles } from "../styles/homeStyles";

export const CTASection = () => {
  return (
    <View style={homeStyles.ctaContainer}>
      <View style={homeStyles.ctaLeft}>
        
        <Image
          source={require("../../assets/logo.png")}
          style={homeStyles.ctaLogo}
          resizeMode="contain"
        />

        <Text style={homeStyles.ctaHeadline}>
          Organiza tus ingresos y gastos{"\n"}de manera simple.
        </Text>

        <Text style={homeStyles.ctaSubheadline}>
          Empieza a ahorrar hoy mismo y alcanza tus metas familiares sin estrés.
        </Text>

        <View>
          <Text style={homeStyles.ctaBenefit}>✅ 100% gratis y fácil de usar</Text>
          <Text style={homeStyles.ctaBenefit}>💳 Controla tus finanzas familiares</Text>
          <Text style={homeStyles.ctaBenefit}>📈 Visualiza tus avances al instante</Text>
          <Text style={homeStyles.ctaBenefit}>🔒 Tus datos siempre seguros</Text>
        </View>

        <View style={homeStyles.ctaButtonContainer}>
          <TouchableOpacity style={homeStyles.ctaButton}>
            <Text style={homeStyles.ctaButtonText}>Crear mi cuenta gratis</Text>
          </TouchableOpacity>

          <Text style={homeStyles.ctaClickText}>↑</Text>
          <Text style={homeStyles.ctaClickText}>Click Aquí</Text>
        </View>
      </View>

      <View style={homeStyles.ctaRight}>
        <Image
          source={require("../../assets/dinero.png")}
          style={homeStyles.ctaBanner}
          resizeMode="cover"
        />
      </View>

    </View>
  );
};