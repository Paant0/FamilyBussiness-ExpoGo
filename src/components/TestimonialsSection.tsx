import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/homeStyles";

export default function TestimonialsSection() {
  return (
    <View style={styles.testimonios}>
      <Text style={styles.sectionTitle}>Lo que dicen nuestros usuarios</Text>
      <View style={styles.testimoniosGrid}>
        <View style={styles.testimonioCard}>
          <Text style={styles.testimonioText}>
            “Desde que uso FamilyBusiness, sé exactamente en qué se va mi
            dinero. ¡Ha cambiado la forma en que administramos nuestras finanzas!”
          </Text>
          <Text style={styles.testimonioAuthor}>— Laura y Daniel</Text>
        </View>

        <View style={styles.testimonioCard}>
          <Text style={styles.testimonioText}>
            “Ahora ahorramos cada mes sin esfuerzo. La app nos da claridad y
            motivación para cumplir metas.”
          </Text>
          <Text style={styles.testimonioAuthor}>— Andrea Gómez</Text>
        </View>
      </View>
    </View>
  );
}
