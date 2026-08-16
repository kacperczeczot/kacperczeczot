# 📚 src/content/ — Zbiory Danych Content Collections

[🏠 Główny README](../../README.md) / [src](../README.md) / **content**

---

Ten katalog zarządza zorganizowanymi danymi w formacie Markdown z walidacją schematów Zod za pośrednictwem modułu `config.ts`. Edycja online: [Pages CMS](../../CMS.md).

## 📂 Kolekcje

### 1. `ensembles/` (Zespoły i formacje muzyczne)
Zawiera pliki Markdown opisujące poszczególne formacje artystyczne, z którymi związany jest Kacper Czeczot.

#### Schemat Zod (`config.ts`):
```typescript
{
  name: z.string(),                                         // Pełna nazwa formacji
  pillar: z.enum(['orkiestry', 'chory', 'teatr', 'estrada']), // Kategoria
  role: z.string(),                                         // Pełniona rola (np. Główny Dyrygent)
  concertCount: z.string(),                                 // Liczba koncertów / występów
  years: z.string(),                                        // Lata działalności
  highlights: z.array(z.string()),                          // Kluczowe osiągnięcia
  photos: z.array(z.string()),                              // Ścieżki do kadrów i materiałów
  order: z.number(),                                        // Kolejność wyświetlania
}
```

#### Lista formacji:
* **Orkiestry (`pillar: "orkiestry"`):**
  * `opinogora.md` — Orkiestra GOK w Opinogórze
  * `rebowo.md` — Orkiestra Dęta OSP Rębowo
  * `chociszewo.md` — Orkiestra Dęta OSP Chociszewo
  * `wieczfnia.md` — Młodzieżowa Orkiestra Dęta Wieczfnia Kościelna
  * `chorzele.md` — Miejska Młodzieżowa Orkiestra Dęta w Chorzelach
  * `orkiestra-psm-mlawa.md` — Orkiestra PSM w Mławie
  * `bogate.md` — Orkiestra Dęta OSP Bogate
  * `przasnysz.md` — Orkiestra Dęta OSP Przasnysz
* **Chóry (`pillar: "chory"`):**
  * `chor-wawrzyczek.md` — Chór im. prof. Wiktora Wawrzyczka UWM
  * `cantores-varmienses.md` — Chór „Cantores Varmienses”
  * `ars-vocale.md` — Chór „Ars Vocale” Instytutu Muzyki
  * `proforma.md` — Chór „ProForma Project”
* **Scena & Teatr (`pillar: "teatr"`):**
  * `grupa-operetkowa.md` — Grupa Operetkowa przy PSM w Mławie
  * `teatr-muzyczny-uwm.md` — Teatr Muzyczny UWM
  * `musical-pora-jeziora.md` — Musical „Pora Jeziora”
* **Kameralistyka & Estrada (`pillar: "estrada"`):**
  * `muzoteka.md` — Zespół wokalno-instrumentalny (Muzoteka)
  * `dyplomy-uwm.md` — Współprace dyplomowe UWM
  * `estrada-studencka.md` — Estrada studencka i solowa

---

### 2. `works/` (Dzieła autorskie i projekty studyjne)
Zawiera autorskie projekty wykonawcze, kompozytorskie i realizatorskie (np. dyplomowe dzieła dyrygenckie, płyty wielośladowe, takie jak *Echo Epok*).

#### Schemat Zod (`config.ts`):
```typescript
{
  title: z.string(),
  subtitle: z.string(),
  type: z.enum(['conducting', 'production']),
  year: z.string(),
  description: z.string(),
  youtubeVideos: z.array(
    z.object({
      title: z.string(),
      youtubeId: z.string(),
    })
  ),
  order: z.number(),
}
```
