# Kacper Czeczot — Oficjalne Portfolio Artystyczne

> **Dyrygent · Multiinstrumentalista · Aranżer**  
> Nowoczesne, responsywne portfolio artystyczne zrealizowane w technologii **Astro 5** i **Tailwind CSS**, wyposażone w interaktywny diagram radialny z fizyką przyciągania magnetycznego (*Magnetic Parallax*) oraz system Content Collections.

---

## 🗺️ Mapa Repozytorium

* 📁 [**`src/components/`**](src/components/README.md) — Komponenty interfejsu (Hero, diagram radialny, nawigacja, stopka)
* 📁 [**`src/content/`**](src/content/README.md) — Baza danych Markdown i Content Collections (formacje, dzieła)
* 📁 [**`src/layouts/`**](src/layouts/README.md) — Szablony bazowe, struktura HTML i tagi SEO
* 📁 [**`src/pages/`**](src/pages/_README.md) — Trasy i podstrony serwisu (`/`, `/projekty-autorskie`, `/bio`)
* 📁 [**`public/`**](public/README.md) — Statyczne zasoby graficzne, wektory SVG i portrety
* 📁 [**`scripts/`**](scripts/README.md) — Skrypty pomocnicze i generatory assetów

---

## ⚡ Stos Technologiczny

* **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / SSG)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Vanilla CSS
* **Typografia:** `Plus Jakarta Sans` (Google Fonts)
* **Ikony:** [lucide-astro](https://lucide.dev/)
* **Fizyka ruchu:** Natywny silnik interpolacji sprężystości (*Spring Lerp*) i przyciągania magnetycznego (*Magnetic Parallax*)
* **Zarządzanie treścią:** Astro Content Collections z walidacją typów [Zod](https://zod.dev/)

---

## 🚀 Uruchomienie i Budowanie

### Wymagania
* Node.js `>= 18.17.0`
* npm `>= 9.0.0`

### Komendy

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego (http://localhost:4321)
npm run dev

# Kompilacja produkcyjna (katalog dist/)
npm run build

# Podgląd zbudowanej wersji
npm run preview
```

---

## 📐 Architektura i Kluczowe Moduły

1. **[Hero Section](src/components/README.md#1-heroastro):**
   * Prezentacja sylwetki artystycznej, tytułów oraz 4-kolumnowego paska wskaźników dorobku (`300+ Występów scenicznych`, `20+ Zespołów i formacji`, `6 Krajów tras koncertowych`, `3 Dyplomy z wyróżnieniem`).
2. **[Radial Graph](src/components/README.md#2-radialgraphastro):**
   * Trójpoziomowy interaktywny diagram konstelacji formacji muzycznych z płynnym zoomem, fizyką magnetyczną i wbudowaną kartą szczegółów (Poziom 3).
3. **[Content Collections](src/content/README.md):**
   * Formalna baza markdown dla orkiestr, chórów, teatru muzycznego, zespołów estradowych oraz dzieł autorskich.

---

## 📄 Prawa autorskie

© 2026 Kacper Czeczot. Wszelkie prawa zastrzeżone.
