# 📁 src/ — Kod źródłowy aplikacji

[🏠 Główny README](../README.md) / **src**

---

Katalog `src/` stanowi rdzeń projektu portfolio Kacpra Czeczota opartego na frameworku Astro.

## 📂 Struktura katalogów w `src/`

| Katalog | Opis modułu |
| :--- | :--- |
| [**`components/`**](components/README.md) | Komponenty widokowe, diagram bąbelkowy, panel boczny, nawigacja i stopka |
| [**`content/`**](content/README.md) | Schematy Zod i zbiory danych Content Collections (`ensembles`, `works`) |
| [**`layouts/`**](layouts/README.md) | Główny layout strony `BaseLayout.astro`, konfiguracja meta-tagów i SEO |
| [**`pages/`**](pages/_README.md) | Trasy i podstrony serwisu (`index.astro`, `projekty-autorskie.astro`, `bio.astro`) |
| **`styles/`** | Globalny arkusz stylów CSS (`global.css`) |

---

## 🧭 Przepływ danych w aplikacji

```mermaid
graph TD
    A[src/content/ensembles/*.md] -->|Astro Content Layer| B[src/components/RadialGraph.astro]
    D[src/content/works/*.md] -->|getCollection| E[src/pages/projekty-autorskie.astro]
    F[src/layouts/BaseLayout.astro] --> G[src/pages/index.astro]
    F --> H[src/pages/bio.astro]
    F --> E
```
