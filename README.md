<p align="right">
  <a href="./README.es.md">🇪🇸 Leer en Español</a>
</p>

<p align="center">
  <img src="./assets/banner.svg" alt="Modern View Transitions Banner" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-Vite-38BDF8?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Web_API-View_Transitions-34D399?style=for-the-badge" alt="View Transitions API" />
  <img src="https://img.shields.io/badge/License-MIT-818CF8?style=for-the-badge" alt="MIT License" />
</p>

# Modern View Transitions

A lightweight, practical showcase of the **native Browser View Transitions API** (`document.startViewTransition`) in **React + TypeScript + Vite**—delivering smooth shared-element morphs and route/state transitions at 60fps without heavy animation libraries.

---

## How It Works

```mermaid
flowchart LR
    State["UI State Change"] --> Check{"startViewTransition supported?"}
    Check -->|Yes| SnapOld["Capture Old DOM Snapshot"]
    SnapOld --> Mutate["flushSync / Update React DOM"]
    Mutate --> SnapNew["Capture New DOM Snapshot"]
    SnapNew --> Morph["GPU Pseudo-Element Morph (::view-transition-group)"]
    Check -->|No| Fallback["Instant DOM Update Fallback"]
```

---

## Quick Start

```bash
git clone https://github.com/stephanocamoretti-dotcom/modern-view-transitions.git
cd modern-view-transitions
npm install
npm run dev
```

---

## References

- [MDN Web Docs — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [Chrome for Developers — Smooth Transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions)
