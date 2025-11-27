import { StyleSheet } from "react-native";

export const getStyles = (theme: "light" | "dark") => {
  const isLight = theme === "light";

  const colors = {
    background: isLight ? "#f3f5f4" : "#0f1112",
    card: isLight ? "#fff" : "#1f1f1f",
    cardLight: isLight ? "#f3f3f3" : "#2a2a2a",
    text: isLight ? "#0d1b3d" : "#e5e5e5",
    textSecondary: isLight ? "#333" : "#cfcfcf",
    heroBg: isLight ? "#dfe7df" : "#262f26",
    benefitsBg: isLight ? "#fff" : "#141414",
    testimoniosBg: isLight ? "#e0eae2" : "#232423",
    accent: "#7cd18d",
    primary: isLight ? "#00b894" : "#00e6a8",
    secondary: isLight ? "#00b894" : "#00e6a8",
    ctaBg: isLight ? "#dce5df" : "#16321f",
  };

  return StyleSheet.create({
    /* ============================
               GENERAL
    ============================ */
    container: {
      padding: 20,
      backgroundColor: theme === "light" ? "#fff" : "#121212",
      flex: 1,
    },

    contentContainer: {
      alignItems: "center",
      paddingBottom: 40,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },

    /* ============================
                HERO
    ============================ */
    hero: {
      width: '100%',
      paddingVertical: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },

    heroSection: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.heroBg,
      padding: 30,
      width: "100%",
    },
    heroText: {
      alignItems: "center",
      marginBottom: 20,
    },
    heroTitle: {
      fontSize: 30,
      fontWeight: "bold",
      color: colors.text,
      textAlign: "center",
    },
    heroSubtitle: {
      fontSize: 18,
      color: colors.textSecondary,
      marginVertical: 10,
      textAlign: "center",
    },
    heroDescription: {
      fontSize: 15,
      color: colors.textSecondary,
      textAlign: "center",
      lineHeight: 22,
      marginBottom: 20,
    },
    heroImage: {
      width: 300,
      height: 200,
      borderRadius: 15,
      resizeMode: "cover",
    },
    btnPrimary: {
      backgroundColor: '#00e6a8',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    btnPrimaryText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },

    btnPressed: {
      opacity: 0.7,
    },

    /* ============================
              CARDS / GRID
    ============================ */
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 10,
      width: "100%",
    },
    card: {
      width: "45%", // adapta según pantalla; antes usabas 20% en otro diseño
      maxWidth: 320,
      backgroundColor: colors.cardLight,
      padding: 15,
      borderRadius: 10,
      margin: 5,
      alignItems: "center",
    },
    icon: {
      fontSize: 30,
      color: colors.text,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
      color: colors.text,
      textAlign: "center",
    },
    cardText: {
      textAlign: "center",
      color: colors.textSecondary,
      marginTop: 5,
    },

    /* ============================
              BENEFICIOS
    ============================ */
    benefitsSection: {
      padding: 30,
      backgroundColor: colors.benefitsBg,
      width: "100%",
    },
    benefitsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 15,
    },
    benefitCard: {
      backgroundColor: colors.cardLight,
      borderRadius: 15,
      padding: 20,
      width: "90%",
      maxWidth: 320,
      alignItems: "center",
      marginVertical: 10,
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
    },
    benefitTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.text,
      marginBottom: 8,
      textAlign: "center",
    },
    benefitText: {
      textAlign: "center",
      color: colors.textSecondary,
    },

    /* ============================
              BENEFICIOS - IMAGEN / TEXTO
    ============================ */
    beneficios: {
      marginTop: 30,
      alignItems: "center",
      width: "100%",
    },
    beneficiosImg: {
      width: 300,
      height: 180,
      borderRadius: 10,
    },
    beneficiosTexto: {
      marginTop: 15,
      alignItems: "center",
      paddingHorizontal: 10,
    },

    /* ============================
             TESTIMONIOS
    ============================ */
    testimonios: {
      backgroundColor: colors.testimoniosBg,
      padding: 30,
      width: "100%",
    },
    testimoniosGrid: {
      alignItems: "center",
    },
    testimonioCard: {
      backgroundColor: colors.card,
      borderRadius: 15,
      padding: 20,
      marginVertical: 10,
      width: "90%",
      maxWidth: 400,
      elevation: 3,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
    },
    testimonioText: {
      color: colors.textSecondary,
      fontStyle: "italic",
      marginBottom: 10,
      textAlign: "center",
    },
    testimonioAuthor: {
      textAlign: "center",
      fontWeight: "bold",
      color: colors.text,
    },

    /* ============================
               SECCIONES / TEXTOS
    ============================ */
    sectionTitle: {
      fontSize: 22,
      color: colors.text,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
    },
    sectionText: {
      fontSize: 14,
      color: colors.textSecondary,
      textAlign: "center",
      marginVertical: 10,
    },

    /* ============================
              BOTONES / CTA GENERICO
    ============================ */

    btnSecondary: {
      backgroundColor: colors.secondary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    btnText: {
      color: "#fff",
      fontWeight: "bold",
    },

    /* ============================
               METRICAS / STATS
    ============================ */
    metricas: {
      marginTop: 30,
      alignItems: "center",
      width: "100%",
    },
    metricaItem: {
      marginVertical: 10,
      alignItems: "center",
    },
    metricaNumber: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.text,
    },
    metricaLabel: {
      fontSize: 14,
      color: colors.textSecondary,
    },

    botonesContador: {
      flexDirection: "row",
      gap: 10,
      marginTop: 10,
    },
    counterBtn: {
      backgroundColor: isLight ? "#e0e0e0" : "#333",
      padding: 10,
      borderRadius: 8,
    },

    cta: {
      marginTop: 40,
      alignItems: "center",
      width: "100%",
    },

    /* ============================
                 CTA SECTION (ESPECIFICO)
    ============================ */
    ctaContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      padding: 30,
      backgroundColor: colors.ctaBg,
      width: "100%",
    },
    ctaLeft: {
      flex: 1,
      minWidth: "48%",
    },
    ctaLogo: {
      width: 260,
      height: 80,
      marginBottom: 25,
      resizeMode: "contain",
    },
    ctaHeadline: {
      fontSize: 26,
      color: isLight ? "#35765c" : "#b6f1cf",
      fontWeight: "700",
      marginBottom: 10,
    },
    ctaSubheadline: {
      fontSize: 16,
      marginBottom: 20,
      color: isLight ? "#1e1e1e" : "#e5e5e5",
      textDecorationLine: "underline",
    },
    ctaBenefit: {
      fontSize: 15,
      marginVertical: 5,
      color: colors.textSecondary,
    },
    ctaButtonContainer: {
      alignItems: "center",
      marginTop: 20,
    },
    ctaButton: {
      backgroundColor: isLight ? "#1e1e1e" : colors.accent,
      paddingVertical: 18,
      paddingHorizontal: 70,
      borderRadius: 30,
      marginBottom: 5,
      elevation: 5,
    },
    ctaButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    ctaClickText: {
      marginTop: 8,
      fontSize: 13,
      color: isLight ? "#1e1e1e" : "#e8e8e8",
      textAlign: "center",
    },
    ctaRight: {
      flex: 1,
      minWidth: "48%",
      alignItems: "center",
      marginTop: 20,
    },
    ctaBanner: {
      width: "100%",
      height: 250,
      borderRadius: 12,
    },

    /* ============================
                 FOOTER / CTA_FINAL
    ============================ */
    ctaFinal: {
      backgroundColor: colors.accent,
      padding: 40,
      alignItems: "center",
      width: "100%",
    },
    ctaTitle: {
      color: "#fff",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    ctaText: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
      marginBottom: 20,
    },
    btnSecundario: {
      backgroundColor: "#fff",
      paddingVertical: 12,
      paddingHorizontal: 26,
      borderRadius: 8,
    },
    btnSecundarioText: {
      color: colors.accent,
      fontWeight: "bold",
      fontSize: 16,
    },

    footer: {
      backgroundColor: colors.accent,
      padding: 40,
      alignItems: "center",
      width: "100%",
    },
  });
};
