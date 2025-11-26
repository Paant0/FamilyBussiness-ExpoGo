import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { caracteristicasStyles } from "../styles/homeStyles";

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
        <ScrollView contentContainerStyle={caracteristicasStyles.container}>
            <View style={caracteristicasStyles.hero}>
                <Text style={caracteristicasStyles.heroTitle}>
                    Impulsa tu negocio familiar con Family Business Project
                </Text>
                <Text style={caracteristicasStyles.heroSubtitle}>
                    Conoce nuestras funciones diseñadas para hacer crecer tu empresa 🚀
                </Text>
            </View>

            {/* CARDS */}
            <View style={caracteristicasStyles.grid}>
                {[
                    { icon: '⚙️', title: 'Automatización Inteligente', text: 'Reduce tareas repetitivas con flujos automáticos.' },
                    { icon: '📈', title: 'Analíticas en Tiempo Real', text: 'Obtén reportes precisos para decisiones inteligentes.' },
                    { icon: '💬', title: 'Comunicación Eficiente', text: 'Conecta a tu equipo y mantén la información centralizada.' },
                    { icon: '🛡️', title: 'Seguridad de Datos', text: 'Protege tu información con encriptación avanzada.' },
                ].map((item, index) => (
                    <View key={index} style={caracteristicasStyles.card}>
                        <Text style={caracteristicasStyles.icon}>{item.icon}</Text>
                        <Text style={caracteristicasStyles.cardTitle}>{item.title}</Text>
                        <Text style={caracteristicasStyles.cardText}>{item.text}</Text>
                    </View>
                ))}
            </View>

            {/* BENEFICIOS */}
            <View style={caracteristicasStyles.beneficios}>
                <Image
                    source={{ uri: 'https://odoocdn.com/openerp_website/static/src/img/apps/expenses/hero_image.webp' }}
                    style={caracteristicasStyles.beneficiosImg}
                />
                <View style={caracteristicasStyles.beneficiosTexto}>
                    <Text style={caracteristicasStyles.sectionTitle}>Todo bajo control, en una sola plataforma</Text>
                    <Text style={caracteristicasStyles.sectionText}>
                        Administra tus finanzas, empleados, inventario y clientes desde una sola herramienta.
                    </Text>

                    <TouchableOpacity style={caracteristicasStyles.btnPrimary}>
                        <Text style={caracteristicasStyles.btnText}>Descubre más</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* MÉTRICAS */}
            <View style={caracteristicasStyles.metricas}>
                <View style={caracteristicasStyles.metricaItem}>
                    <Text style={caracteristicasStyles.metricaNumber}>
                        {loaded ? `+${count}` : 'Cargando...'}
                    </Text>
                    <Text style={caracteristicasStyles.metricaLabel}>Usuarios felices</Text>

                    <View style={caracteristicasStyles.botonesContador}>
                        <TouchableOpacity onPress={increase} style={caracteristicasStyles.counterBtn}><Text>➕</Text></TouchableOpacity>
                        <TouchableOpacity onPress={decrease} style={caracteristicasStyles.counterBtn}><Text>➖</Text></TouchableOpacity>
                        <TouchableOpacity onPress={reset} style={caracteristicasStyles.counterBtn}><Text>🔁</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={caracteristicasStyles.metricaItem}>
                    <Text style={caracteristicasStyles.metricaNumber}>98%</Text>
                    <Text style={caracteristicasStyles.metricaLabel}>Satisfacción de clientes</Text>
                </View>

                <View style={caracteristicasStyles.metricaItem}>
                    <Text style={caracteristicasStyles.metricaNumber}>+300</Text>
                    <Text style={caracteristicasStyles.metricaLabel}>Negocios impulsados</Text>
                </View>
            </View>

            {/* CTA */}
            <View style={caracteristicasStyles.cta}>
                <Text style={caracteristicasStyles.sectionTitle}>¿Listo para comenzar?</Text>
                <Text style={caracteristicasStyles.sectionText}>
                    Únete a cientos de emprendedores que ya están transformando sus negocios.
                </Text>
                <TouchableOpacity style={caracteristicasStyles.btnSecondary}>
                    <Text style={caracteristicasStyles.btnText}>Empezar ahora</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
