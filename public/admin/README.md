# ⚙️ Panel Administracyjny CMS (Instrukcja)

[🏠 Główny README](../../README.md) / [public](../README.md) / **admin**

---

W Twojej witrynie zainstalowany jest nowoczesny, bezpieczny panel administracyjny **Sveltia CMS** kompatybilny ze strukturą Astro i GitHub Pages.

## 🚀 Jak uruchomić i zalogować się do panelu?

### Krok 1: Otwórz adres panelu
* **Wersja online:** `https://kacperczeczot.github.io/admin` (lub `twoja-domena.pl/admin`)
* **Wersja lokalna:** `http://localhost:4321/admin` (gdy uruchomisz `npm run dev`)

### Krok 2: Logowanie kontem GitHub
1. Kliknij przycisk **„Sign in with GitHub”** lub wprowadź swój *Personal Access Token* (PAT z uprawnieniem `repo`).
2. Ponieważ tylko Ty posiadasz uprawnienia do tego repozytorium, panel autoryzuje Cię i załaduje pełny interfejs edycji.

---

## 🎨 Co możesz edytować w panelu CMS?

### 1. 🏠 Strona Główna (`Strony i Teksty Witryny` $\rightarrow$ `Strona Główna`)
* **Hero:** Zmiana imienia, roli (`Dyrygent · Multiinstrumentalista · Aranżer`), akapitu wprowadzającego.
* **Główne zdjęcie portretowe:** Wgrywanie nowego portretu z dysku metodą przeciągnij-i-upuść oraz zmiana podpisu.
* **Pasek 4 wskaźników dorobku:** Edycja liczb (np. `300+`, `20+`, `6`, `3`) oraz ich etykiet.
* **Kontakt i Stopka:** Edycja adresu e-mail, tekstu zaproszenia do współpracy oraz linków do GitHuba i YouTube.

### 2. 🎓 Podstrona Bio & Doświadczenie (`Strony i Teksty Witryny` $\rightarrow$ `Podstrona Bio`)
* **Biogram:** Nagłówek i treść akapitów biograficznych.
* **Edukacja wyższa i Szkoły muzyczne:** Dodawanie, edycja i usuwanie etapów edukacji, dyplomów i uczelni.
* **Nagrody i Wyróżnienia:** Zarządzanie listą nagród (rok, tytuł, organizator).
* **Instrumentarium:** Edycja instrumentów głównych i dyscyplin.

### 3. 🎼 Formacje i Zespoły (`Formacje i Zespoły`)
* Wybór dowolnego zespołu (Orkiestry, Chóry, Scena & Teatr, Estrada).
* **Zdjęcia:** Wgrywanie nowych kadrów i usuwanie starych.
* **Teksty:** Edycja roli, okresu działalności, punktów osiągnięć i pełnego opisu.

### 4. 🎬 Dzieła Autorskie & Projekty (`Dzieła Autorskie & Projekty`)
* Edycja koncertów dyplomowych, produkcji studyjnych i identyfikatorów wideo YouTube.

---

## 💾 Zapis i Publikacja
Po wprowadzeniu zmian kliknij niebieski przycisk **„Save” (Zapisz)** w prawym górnym rogu. Panel automatycznie zapisze zmiany w repozytorium GitHub, a nowa wersja strony opublikuje się w sieci w ciągu ok. 30–60 sekund.
