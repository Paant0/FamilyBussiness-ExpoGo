import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/homeStyles";

export default function BenefitsSection() {
  return (
    <View style={styles.benefitsSection}>
      <Text style={styles.sectionTitle}>¿Por qué elegir FamilyBusiness?</Text>
      <View style={styles.benefitsGrid}>
        <View style={styles.benefitCard}>
          <Text style={styles.icon}>📊</Text>
          <Text style={styles.benefitTitle}>Control total de tus finanzas</Text>
          <Text style={styles.benefitText}>
            Registra ingresos y gastos, visualiza tus movimientos y evita
            errores financieros.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.icon}>📱</Text>
          <Text style={styles.benefitTitle}>Interfaz simple e intuitiva</Text>
          <Text style={styles.benefitText}>
            Una app diseñada para cualquier persona, sin necesidad de
            conocimientos contables.
          </Text>
        </View>

        <View style={styles.benefitCard}>
          <Text style={styles.icon}>💡</Text>
          <Text style={styles.benefitTitle}>Recomendaciones inteligentes</Text>
          <Text style={styles.benefitText}>
            Recibe sugerencias personalizadas para ahorrar y optimizar tus gastos.
          </Text>
        </View>
      </View>
    </View>
  );
}
