import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

// 🎯 Custom Hook: Contador reutilizable
function useCounter(initialValue: number, step: number = 1) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount((prev) => prev + step);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - step : 0));
  const reset = () => setCount(initialValue);

  return { count, increase, decrease, reset };
}

export default function Caracteristicas() {
  const { count, increase, decrease, reset } = useCounter(5000, 100);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🌟 Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Impulsa tu negocio familiar con Family Business Project</Text>
        <Text style={styles.heroSubtitle}>
          Conoce nuestras funciones diseñadas para hacer crecer tu empresa 🚀
        </Text>
      </View>

      {/* 💡 Características principales */}
      <View style={styles.grid}>
        {[
          { icon: '⚙️', title: 'Automatización Inteligente', text: 'Reduce tareas repetitivas con flujos automáticos.' },
          { icon: '📈', title: 'Analíticas en Tiempo Real', text: 'Obtén reportes precisos para decisiones inteligentes.' },
          { icon: '💬', title: 'Comunicación Eficiente', text: 'Conecta a tu equipo y mantén la información centralizada.' },
          { icon: '🛡️', title: 'Seguridad de Datos', text: 'Protege tu información con encriptación avanzada.' },
        ].map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* 📊 Beneficios */}
      <View style={styles.beneficios}>
        <Image
          source={{ uri: 'https://odoocdn.com/openerp_website/static/src/img/apps/expenses/hero_image.webp' }}
          style={styles.beneficiosImg}
        />
        <View style={styles.beneficiosTexto}>
          <Text style={styles.sectionTitle}>Todo bajo control, en una sola plataforma</Text>
          <Text style={styles.sectionText}>
            Administra tus finanzas, empleados, inventario y clientes con una sola herramienta
            centralizada. Simplifica tus operaciones y enfócate en lo que realmente importa.
          </Text>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnText}>Descubre más</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🧮 Métricas */}
      <View style={styles.metricas}>
        <View style={styles.metricaItem}>
          <Text style={styles.metricaNumber}>{loaded ? `+${count}` : 'Cargando...'}</Text>
          <Text style={styles.metricaLabel}>Usuarios felices</Text>
          <View style={styles.botonesContador}>
            <TouchableOpacity onPress={increase} style={styles.counterBtn}><Text>➕</Text></TouchableOpacity>
            <TouchableOpacity onPress={decrease} style={styles.counterBtn}><Text>➖</Text></TouchableOpacity>
            <TouchableOpacity onPress={reset} style={styles.counterBtn}><Text>🔁</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.metricaItem}>
          <Text style={styles.metricaNumber}>98%</Text>
          <Text style={styles.metricaLabel}>Satisfacción de clientes</Text>
        </View>
        <View style={styles.metricaItem}>
          <Text style={styles.metricaNumber}>+300</Text>
          <Text style={styles.metricaLabel}>Negocios impulsados</Text>
        </View>
      </View>

      {/* 🚀 CTA */}
      <View style={styles.cta}>
        <Text style={styles.sectionTitle}>¿Listo para comenzar?</Text>
        <Text style={styles.sectionText}>
          Únete a cientos de emprendedores que ya están transformando sus negocios familiares.
        </Text>
        <TouchableOpacity style={styles.btnSecondary}>
          <Text style={styles.btnText}>Empezar ahora</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  hero: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  card: {
    width: '45%',
    backgroundColor: '#f3f3f3',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardText: {
    textAlign: 'center',
    color: '#333',
    marginTop: 5,
  },
  beneficios: {
    marginTop: 30,
    alignItems: 'center',
  },
  beneficiosImg: {
    width: 300,
    height: 180,
    borderRadius: 10,
  },
  beneficiosTexto: {
    marginTop: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  btnPrimary: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnSecondary: {
    backgroundColor: '#00b894',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  metricas: {
    marginTop: 30,
    alignItems: 'center',
  },
  metricaItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
  metricaNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  metricaLabel: {
    fontSize: 14,
    color: '#555',
  },
  botonesContador: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  counterBtn: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
  },
  cta: {
    marginTop: 40,
    alignItems: 'center',
  },
});
