---
title: "StageSync — System Synchronizacji Scenicznej & Live Show Control"
description: "Autorski system synchronizacji scenicznej (architektura serwer + tablet/mobile) dedykowany do obsługi występów live: transport oparty o MIDI Clock + SPP, dedykowane role wykonawcze dla muzyków, wykrywanie mDNS w sieci LAN oraz format paczek .stagesync."
tags:
  - "StageSync"
  - "MIDI Clock / SPP"
  - "mDNS LAN"
  - "Live Stage Control"
  - "TypeScript"
featured: true
order: 1
---

## Architektura i Założenia Systemu StageSync

StageSync to autorski system stworzony z myślą o pełnej kontroli i synchronizacji podczas występów na żywo jako dedykowana alternatywa dla zamkniętych środowisk typu VST Live.

### Kluczowe Elementy Architektury:
- **Architektura Serwer + Tablet:** Centralny węzeł sterujący oraz lekkie panele klienckie dla muzyków z automatycznym wykrywaniem w sieci lokalnej (mDNS).
- **Precyzja MIDI Clock & SPP:** Synchronizacja transportu i pozycji utworu w oparciu o Song Position Pointer.
- **Dedykowane Role Wykonawcze:** Personalizowane widoki dla członków zespołu (tekst z akordami, podgląd partytury, metronom/perkusja).
- **Format Paczek `.stagesync`:** System archiwizacji, importu i eksportu setlist, utworów oraz automatycznych kopii zapasowych.
