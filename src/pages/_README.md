# 📄 src/pages/ — Routing i Strony Witryny

[🏠 Główny README](../../README.md) / [src](../README.md) / **pages**

---

W oparciu o system routingu plikowego frameworka Astro, każdy plik w tym katalogu odpowiada konkretnemu adresowi URL w witrynie.

## 🧭 Lista stron i tras

### 1. `index.astro` (`/`)
* **Strona główna serwisu.**
* Zawiera:
  * Sekcję `<Hero />` z pozycjonowaniem artystycznym i 4 wskaźnikami dorobku.
  * Katalog sekcji (*Nawigacja*) z bezpośrednimi odnośnikami do podstron merytorycznych.

---

### 2. `scena-i-zespoly.astro` (`/scena-i-zespoly`)
* **Działalność sceniczna i zespołowa.**
* Zawiera:
  * Interaktywny diagram konstelacji formacji artystycznych `<RadialGraph />` (trzy poziomy zoomu, fizyka przyciągania magnetycznego).
  * Mobilny widok zoptymalizowany pod dotyk ze wstęgą zakładek (*Ribbon Tabs*).

---

### 3. `projekty-autorskie.astro` (`/projekty-autorskie`)
* **Prezentacja dzieł autorskich i produkcji muzycznych.**
* Zawiera:
  * Projekty dyrygentury koncertowej i dyplomowej (np. utwory Henryka Mikołaja Góreckiego, Stanisława Moniuszki, partytury orkiestrowe).
  * Produkcje studyjne (płyta *Echo Epok*, wielośladowa realizacja dźwięku, instrumentarium hybrydowe).
  * Zintegrowane odtwarzacze wideo YouTube z dokumentacją wykonań.

---

### 4. `bio.astro` (`/bio`)
* **Dossier artystyczne, edukacja i warsztat wykonawczy.**
* Zawiera:
  * Oś czasu edukacji muzycznej (Uniwersytet Warmińsko-Mazurski w Olsztynie, Państwowa Szkoła Muzyczna I i II st. w Mławie).
  * Wykaz nagród, dyplomów i wyróżnień (festiwale w Hiszpanii, na Litwie, we Włoszech, w Bułgarii i Polsce).
  * Prezentację warsztatu multiinstrumentalnego (fortepian, klarnet, śpiew solowy, organy) i zaplecza realizacji dźwięku.
