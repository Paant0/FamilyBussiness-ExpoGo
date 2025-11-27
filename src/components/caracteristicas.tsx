import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getStyles } from "../styles/homeStyles";
import { useTheme } from "../../context/ThemeContext";

// Custom hook para contador
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

    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(theme);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.heroTitle}>
                    Impulsa tu negocio familiar con Family Business Project
                </Text>
                <Text style={styles.heroSubtitle}>
                    Conoce nuestras funciones diseñadas para hacer crecer tu empresa 🚀
                </Text>
            </View>

            {/* CARDS */}
            <View style={styles.grid}>
                {[
                    { icon: '⚙️', title: 'Automatización Inteligente', text: 'Reduce tareas repetitivas con flujos automáticos.' },
                    { icon: '📈', title: 'Analíticas en Tiempo Real', text: 'Obtén reportes precisos para decisiones inteligentes.' },
                ].map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.icon}>{item.icon}</Text>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardText}>{item.text}</Text>
                    </View>
                ))}
            </View>

            {/* BENEFICIOS */}
            <View style={styles.beneficios}>
                <Image
                    source={{ uri: 'https://odoocdn.com/openerp_website/static/src/img/apps/expenses/hero_image.webp' }}
                    style={styles.beneficiosImg}
                />
                <View style={styles.beneficiosTexto}>
                    <Text style={styles.sectionTitle}>Todo bajo control, en una sola plataforma</Text>
                    <Text style={styles.sectionText}>
                        Administra tus finanzas, empleados, inventario y clientes desde una sola herramienta.
                    </Text>

                    <TouchableOpacity style={styles.btnPrimary}>
                        <Text style={styles.btnText}>Descubre más</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* MÉTRICAS */}
            <View style={styles.metricas}>
                <View style={styles.metricaItem}>
                    <Text style={styles.metricaNumber}>
                        {loaded ? `+${count}` : 'Cargando...'}
                    </Text>
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

            {/* CTA */}
            <View style={styles.cta}>
                <Text style={styles.sectionTitle}>¿Listo para comenzar?</Text>
                <Text style={styles.sectionText}>
                    Únete a cientos de emprendedores que ya están transformando sus negocios.
                </Text>
                <TouchableOpacity style={styles.btnSecondary}>
                    <Text style={styles.btnText}>Empezar ahora</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
