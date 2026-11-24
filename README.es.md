<p align="right">
  <a href="./README.md">🇺🇸 Read in English</a>
</p>

<p align="center">
  <img src="./assets/banner.svg" alt="Banner de Modern View Transitions" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-Vite-38BDF8?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Web_API-View_Transitions-34D399?style=for-the-badge" alt="View Transitions API" />
  <img src="https://img.shields.io/badge/License-MIT-818CF8?style=for-the-badge" alt="Licencia MIT" />
</p>

# Modern View Transitions

Implementación práctica y ligera de la **API nativa View Transitions** (`document.startViewTransition`) en **React + TypeScript + Vite** para lograr transiciones fluidas entre estados y elementos compartidos a 60fps sin depender de librerías pesadas de animación.

---

## Cómo funciona

```mermaid
flowchart LR
    State["Cambio de estado UI"] --> Check{"Soporta startViewTransition?"}
    Check -->|Si| SnapOld["Captura snapshot DOM anterior"]
    SnapOld --> Mutate["flushSync / Actualiza DOM en React"]
    Mutate --> SnapNew["Captura snapshot DOM nuevo"]
    SnapNew --> Morph["Morph GPU (::view-transition-group)"]
    Check -->|No| Fallback["Actualización instantánea sin animación"]
```

---

## Inicio rápido

```bash
git clone https://github.com/stephanocamoretti-dotcom/modern-view-transitions.git
cd modern-view-transitions
npm install
npm run dev
```

---

## Referencias

- [MDN Web Docs — View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [Chrome for Developers — Smooth Transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions)
