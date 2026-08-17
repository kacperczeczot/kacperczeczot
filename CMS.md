# Zarządzanie Treścią (Pages CMS)

Witryna korzysta z bezserwerowego systemu [Pages CMS](https://pagescms.org), który umożliwia aktualizację tekstów, danych oraz multimediów bezpośrednio przez przeglądarkę z automatycznym zapisem do repozytorium GitHub.

---

## Konfiguracja i pierwsze logowanie

1. Przejdź do [app.pagescms.org](https://app.pagescms.org) (lub pod adres `/admin` w witrynie).
2. Zaloguj się za pomocą konta GitHub.
3. Nadaj uprawnienia do repozytorium **kacperczeczot/kacperczeczot.github.io** (gałąź `main`).

---

## Dostępne sekcje

| Sekcja w CMS | Zakres edycji |
| :--- | :--- |
| **Strona główna** | Imię, nagłówek, wprowadzenie, wskaźniki dorobku, kafelki nawigacji, dane kontaktowe |
| **Bio** | Biogram, stanowiska, edukacja wyższa i muzyczna, nagrody, instrumentarium, zdjęcia |
| **Formacje** | Zespoły i chóry w diagramie radialnym (dodawanie nowych formacji, przypisanie do filarów, kadry) |
| **Projekty** | Dzieła autorskie i dyplomowe, metryki wydań, linki i rejestracje wideo YouTube |

Po zapisaniu zmian w panelu GitHub Actions automatycznie uruchamia proces budowy i wdraża zaktualizowaną wersję strony.
