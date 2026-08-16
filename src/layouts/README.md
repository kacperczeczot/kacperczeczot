# 📐 src/layouts/ — Szablony Bazowe

[🏠 Główny README](../../README.md) / [src](../README.md) / **layouts**

---

W tym katalogu znajduje się główny layout strony odpowiedzialny za strukturę dokumentu HTML, metadane Open Graph, typografię oraz osadzenie globalnych komponentów.

## 📄 `BaseLayout.astro`

### Odpowiedzialności:
1. **Zarządzanie SEO i Open Graph:**
   * Tytuł domyślny: `Kacper Czeczot — Dyrygent · Multiinstrumentalista · Aranżer`
   * Opis meta: `Oficjalne portfolio artystyczne Kacpra Czeczota: dyrygentura symfoniczna i chóralna, wykonawstwo sceniczne, opracowania partytur oraz realizacja dźwięku.`
   * Canonical URL, tagi Twitter Card i Open Graph.
2. **Ładowanie typografii:**
   * Import Google Font `Plus Jakarta Sans` (grubości 300–800) z `preconnect`.
3. **Globalna struktura strony:**
   * Pasek nawigacyjny `<Navbar />`
   * Kontener głównej treści `<main><slot /></main>`
   * Stopka kontaktowa `<Footer />`
   * Globalny panel boczny `<EnsembleDrawer />`
   * Globalny podgląd zdjęć `<Lightbox />`
