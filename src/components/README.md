# 🧩 src/components/ — Komponenty Interfejsu

[🏠 Główny README](../../README.md) / [src](../README.md) / **components**

---

Modularne komponenty interfejsu użytkownika w formacie Astro:

## 📋 Lista komponentów

### 1. `Hero.astro`
Sekcja powitalna na stronie głównej z nagłówkiem artystycznym, krótkim biogramem, fotografią i wskaźnikami dorobku (pobieranymi dynamicznie z `home.json`).

### 2. `RadialGraph.astro`
Interaktywny diagram konstelacji formacji artystycznych:
* **Poziom 1:** Przegląd 4 głównych kategorii (orkiestry, chóry, teatr, kameralistyka).
* **Poziom 2:** Organiczny układ formacji w wybranej kategorii z interaktywną fizyką przyciągania kursora (*magnetic parallax*).
* **Poziom 3:** Karta szczegółów formacji z osiągnięciami i galerią kadrów.
* **Widok mobilny:** Alternatywny, dotykowy widok zakładek z kartami zespołów.

### 3. `Navbar.astro`
Główny pasek nawigacyjny z monogramem, odnośnikami do podstron oraz rozwijanym menu mobilnym.

### 4. `Footer.astro`
Stopka witryny z danymi kontaktowymi, przyciskiem kopiowania e-maila, linkami społecznościowymi i informacją o prawach autorskich.

### 5. `Lightbox.astro`
Dostępny modal do pełnoekranowego podglądu fotografii, aktywowany atrybutem `data-lightbox-src`.

### 6. `SectionHeader.astro`
Uniwersalny nagłówek sekcji z etykietą, tytułem i opcjonalnym podtytułem.

### 7. `YoutubeEmbed.astro`
Komponent do responsywnego osadzania nagrań wideo z YouTube z obsługą trybu prywatności (`youtube-nocookie.com`).
