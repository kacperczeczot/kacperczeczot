---
title: "StageSync — Live Show Control & Stage Sync Engine"
description: "Wysokowydajny silnik synchronizacji scenicznej czasu rzeczywistego napisany w TypeScript i WebAudio API z obsługą protokołów MIDI Clock / Song Position Pointer (SPP), integracją DMX/Art-Net oraz architekturą bezstratnej redundancji na żywo."
tags:
  - "TypeScript"
  - "WebAudio API"
  - "WebMIDI"
  - "Art-Net / DMX"
  - "RxJS"
  - "TailwindCSS"
githubUrl: "https://github.com/kacperczeczot/stagesync"
liveUrl: "https://stagesync-demo.dev"
featured: true
order: 1
---

## Architektura i Założenia Projektu

StageSync powstał z praktycznej potrzeby dyrygenta i reżysera dźwięku — aby zintegrować podkłady orkiestrowe, automatyzację oświetlenia teatralnego oraz odsłuchy douszne (IEM) w jednym niezawodnym punkcie kontrolnym.

### Kluczowe Cechy Architektury:
- **Silnik Czasu Rzeczywistego:** Oparty na sprzętowym zegarze `AudioContext.currentTime`, eliminujący jitter typowy dla standardowych timerów `setTimeout` czy `setInterval`.
- **Obsługa MIDI SPP:** Precyzyjna synchronizacja zewnętrznych cyfrowych stacji roboczych (DAW) z dokładnością do pojedynczej szesnastki i taktu.
- **Wizualizacja Przebiegu Scenicznego:** Dynamiczny interfejs oparty na Canvas i SVG, prezentujący aktualny takt, tempo (BPM), wskaźniki głośności (LUFS) oraz kody czasowe SMPTE.
- **Failover / Redundancja:** Architektura Dual-Engine pozwalająca na równoległe przetwarzanie sygnału audio na dwóch niezależnych urządzeniach z automatycznym przełączaniem bez przerw w dźwięku.
