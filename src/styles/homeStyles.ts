import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //Pantalla general
  container: {
    backgroundColor: "#f3f5f4",
    flex: 1,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f5f4",
  },

  // HERO SECTION
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfe7df",
    padding: 30,
  },
  heroText: {
    alignItems: "center",
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0d1b3d",
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#1f3a93",
    marginVertical: 10,
    textAlign: "center",
  },
  heroDescription: {
    fontSize: 15,
    color: "#333",
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
    backgroundColor: "#7cd18d",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnPressed: {
    backgroundColor: "#5fb874",
  },

  // 📊 BENEFICIOS
  benefitsSection: {
    padding: 30,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 22,
    color: "#0d1b3d",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  benefitsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  benefitCard: {
    backgroundColor: "#f8faf9",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    maxWidth: 320,
    alignItems: "center",
    marginVertical: 10,
    elevation: 4, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  benefitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0d1b3d",
    marginBottom: 8,
    textAlign: "center",
  },
  benefitText: {
    textAlign: "center",
    color: "#333",
  },

  // 💬 TESTIMONIOS
  testimonios: {
    backgroundColor: "#e0eae2",
    padding: 30,
  },
  testimoniosGrid: {
    alignItems: "center",
  },
  testimonioCard: {
    backgroundColor: "#fff",
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
    color: "#555",
    fontStyle: "italic",
    marginBottom: 10,
    textAlign: "center",
  },
  testimonioAuthor: {
    textAlign: "center",
    fontWeight: "bold",
  },

  // 🚀 CTA FINAL
  ctaFinal: {
    backgroundColor: "#7cd18d",
    padding: 40,
    alignItems: "center",
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
    color: "#7cd18d",
    fontWeight: "bold",
    fontSize: 16,
  },
});

// CTA SECTION
export const homeStyles = StyleSheet.create({
  /* ===== CONTAINER GENERAL ===== */
  ctaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 30,
    backgroundColor: "#dce5df",
  },

  ctaLeft: {
    flex: 1,
    minWidth: "48%",
  },

  ctaLogo: {
    width: 260,
    height: 80,
    marginBottom: 25,
  },

  ctaHeadline: {
    fontSize: 26,
    color: "#35765c",
    fontWeight: "700",
    marginBottom: 10,
  },

  ctaSubheadline: {
    fontSize: 16,
    marginBottom: 20,
    color: "#1e1e1e",
    textDecorationLine: "underline",
  },

  ctaBenefit: {
    fontSize: 15,
    marginVertical: 5,
  },

  /* ===== BOTÓN ===== */
  ctaButtonContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  ctaButton: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 18,
    paddingHorizontal: 70,
    borderRadius: 30,
    marginBottom: 5,
    elevation: 5, // sombra Android
  },

  ctaButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  ctaClickText: {
    marginTop: 8,
    fontSize: 13,
    color: "#1e1e1e",
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
});

export const caracteristicasStyles = StyleSheet.create({
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