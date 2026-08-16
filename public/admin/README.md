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
2. Ponieważ tylko Ty posiadasz uprawnienia do tego repozytorium, panel autoryzuje Cię i załaduje interfejs edycji.

---

## 📸 Jak dodawać i zmieniać zdjęcia oraz treści?

1. **Formacje i Zespoły:**
   * Po lewej stronie kliknij **„Formacje i Zespoły”**.
   * Wybierz formację (np. *Orkiestra GOK w Opinogórze Górnej*).
   * W sekcji **„Kadry i fotografie archiwalne”** kliknij **„+ Dodaj”** i przeciągnij plik ze zdjęciem prosto z pulpitu.
   * Możesz edytować nazwę, rolę, punkty osiągnięć i opis.
   * Kliknij **„Zapisz”** (Save) w prawym górnym rogu.

2. **Dzieła Autorskie:**
   * Po lewej stronie kliknij **„Dzieła Autorskie & Projekty”**.
   * Zmieniaj opisy, daty oraz linki do filmów na YouTube.

3. **Publikacja:**
   * Po kliknięciu „Zapisz”, CMS automatycznie wysyła zmianę do GitHuba, a GitHub Actions w ok. 30–60 sekund publikuje zaktualizowaną stronę w internecie!
