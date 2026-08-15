---
title: "StageSync — Live Show Control & Stage Sync Engine"
description: "Koncepcja i silnik synchronizacji scenicznej czasu rzeczywistego w TypeScript i WebAudio API z obsługą protokołów MIDI Clock / Song Position Pointer (SPP), integracją DMX/Art-Net oraz architekturą bezstratnej redundancji na żywo."
tags:
  - "TypeScript"
  - "WebAudio API"
  - "WebMIDI"
  - "Art-Net / DMX"
  - "RxJS"
featured: true
order: 1
---

## Architektura i Założenia Projektu

StageSync powstał z potrzeby integracji podkładów orkiestrowych, automatyzacji oświetlenia scenicznego oraz odsłuchów dousznych (IEM) w jednym punkcie kontrolnym.

### Kluczowe Cechy Architektury:
- **Silnik Czasu Rzeczywistego:** Oparty na sprzętowym zegarze `AudioContext.currentTime`, eliminujący jitter.
- **Obsługa MIDI SPP:** Precyzyjna synchronizacja zewnętrznych cyfrowych stacji roboczych (DAW).
- **Wizualizacja Przebiegu Scenicznego:** Dynamiczny interfejs prezentujący aktualny takt, tempo (BPM) oraz kody czasowe.
- **Failover / Redundancja:** Architektura Dual-Engine z myślą o niezawodności podczas wydarzeń na żywo.
