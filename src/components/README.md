# 🧩 src/components/ — Komponenty Interfejsu

[🏠 Główny README](../../README.md) / [src](../README.md) / **components**

---

W tym katalogu znajdują się wszystkie modularne komponenty interfejsu użytkownika w formacie Astro.

## 📋 Lista komponentów

### 1. `Hero.astro`
* **Przeznaczenie:** Sekcja powitalna na stronie głównej.
* **Elementy:**
  * Główny nagłówek H1 `Kacper Czeczot` i H2 `Dyrygent · Multiinstrumentalista · Aranżer`.
  * Krótki opis artystyczny oraz przycisk CTA kierujący do katalogu nawigacji.
  * Portret sceniczny z podpisem.
  * **Pasek 4 wskaźników dorobku:**
    1. `300+` — `Występów scenicznych`
    2. `20+`  — `Zespołów i formacji`
    3. `6`    — `Krajów tras koncertowych`
    4. `3`    — `Dyplomy z wyróżnieniem`

---

### 2. `RadialGraph.astro`
* **Przeznaczenie:** Wielopoziomowy interaktywny diagram konstelacji formacji artystycznych.
* **Poziomy (Levels):**
  * **Poziom 1 (Przegląd 4 kategorii):** Centralny bąbel dorobku + 4 kategorie (*Orkiestry*, *Chóry & Zespoły*, *Scena & Teatr*, *Kameralistyka & Estrada*).
  * **Poziom 2 (Konstelacja zespołów w kategorii):** Wybrana kategoria rozwija się na pełen ekran z układem organicznym (trójkąt sferyczny dla 3 orkiestr, przekątna dla 2 zespołów). Bąble zawierają wyłącznie czystą nazwę formacji.
  * **Poziom 3 (Karta zespołu wewnątrz diagramu):** Pełny widok formacji ze specyfikacją wykonawczą, osiągnięciami i klikalną galerią kadrów.
* **Silnik fizyki (*Magnetic Parallax*):**
  * Ciągła paralaksa tła (`normX * depth`, `normY * depth`).
  * Płynne przyciąganie magnetyczne w stronę kursora (`Math.pow(1 - dist / 380, 1.8)`).
  * Aksamitny powrót z tłumieniem sprężystym (*Spring Lerp* `0.065–0.08`).
* **Wersja mobilna:** Responsywna wstęga zakładek (*Ribbon Tabs*) z pełnymi kartami zespołów i galeriami kadrów.

---

### 3. `Navbar.astro`
* **Przeznaczenie:** Stały pasek nawigacji zintegrowany z wersją desktopową i mobilnym menu rozwijanym.
* **Branding:** Monogram `KC` + `Kacper Czeczot`.

---

### 4. `Footer.astro`
* **Przeznaczenie:** Minimalistyczny moduł kontaktu i praw autorskich.
* **Elementy:**
  * Nagłówek `KONTAKT` i zaproszenie do współpracy.
  * Aktywny boks e-maila `kacperczeczot7@gmail.com` z przyciskiem szybkiego kopiowania do schowka.
  * Rząd linków do serwisów zewnętrznych (GitHub, YouTube).
  * Pasek praw autorskich.

---

### 5. `Lightbox.astro`
* **Przeznaczenie:** Globalny modal pełnoekranowego podglądu zdjęć i kadrów archiwalnych.
* **Obsługa:** Otwiera się automatycznie po kliknięciu dowolnego elementu z atrybutem `data-lightbox-src`.
