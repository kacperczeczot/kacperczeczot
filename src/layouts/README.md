# 📐 src/layouts/ — Szablony Bazowe

[🏠 Główny README](../../README.md) / [src](../README.md) / **layouts**

---

W tym katalogu znajduje się główny layout strony odpowiedzialny za strukturę dokumentu HTML, metadane Open Graph, typografię oraz osadzenie globalnych komponentów.

## 📄 `BaseLayout.astro`

Szablon bazowy dla wszystkich podstron serwisu, odpowiedzialny za:
1. **Zarządzanie SEO i Open Graph:** Generowanie tagów `<title>`, `<meta description>`, tagów Open Graph / Twitter Card oraz canonical URL.
2. **Ładowanie typografii:** Preconnect i import fontu `Plus Jakarta Sans`.
3. **Globalny szkielet witryny:** Osadzenie paska `<Navbar />`, kontenera głównego `<main><slot /></main>`, stopki `<Footer />` oraz globalnego modalu `<Lightbox />`.
