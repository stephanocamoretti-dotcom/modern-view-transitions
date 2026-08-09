# ⚡ Modern View Transitions API en React

Bienvenido a **Modern View Transitions**, un proyecto de demostración que implementa la [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) nativa de los navegadores modernos junto con **React** y **Vite**.

Este repositorio está diseñado como un **aporte de valor** para desarrolladores y arquitectos web que buscan crear experiencias fluidas tipo app nativa (iOS/Android) **sin necesidad de librerías pesadas** como Framer Motion o React Spring.

## 🚀 ¿Por qué esto es el Futuro del Desarrollo Web?

Históricamente, animar transiciones de página complejas en Single Page Applications (SPAs) requería:
1. Montar componentes fantasma.
2. Interceptar el enrutamiento.
3. Usar JS pesado para calcular dimensiones iniciales y finales (FLIP animations).

La **View Transitions API** delega todo este trabajo al motor de renderizado del navegador (C++). Con solo unas cuantas líneas de código, el navegador captura un "snapshot" de la pantalla anterior, otro de la nueva pantalla, y anima la transición entre ellas utilizando **exclusivamente CSS**.

### Beneficios Clave:
- **0kb extra de JavaScript** para el motor de animación.
- **Rendimiento nativo**, liberando el hilo principal (Main Thread).
- **SEO y Growth Friendly**: Experiencia de usuario inmersiva (mayor retención) sin sacrificar Core Web Vitals (TBT/LCP).
- **Mantenibilidad**: Se controla todo vía CSS `::view-transition-*` pseudo-elementos.

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + Vite 6
- **Routing:** React Router v7
- **Styling:** TailwindCSS v4
- **Animation Engine:** Native Browser View Transitions API

## 📋 Estructura del Código

Este repositorio demuestra:
1. Navegación fluida entre un catálogo (Galería) y el detalle del ítem.
2. `view-transition-name` dinámicos para que las imágenes "vuelen" a su nueva posición.
3. Hook custom `useViewTransition` para encapsular la llamada `document.startViewTransition`.

## 📦 Instalación y Uso

1. **Clonar repositorio:**
```bash
git clone https://github.com/tu-usuario/modern-view-transitions.git
cd modern-view-transitions
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Levantar entorno local:**
```bash
npm run dev
```

## 👨‍💻 Acerca del Autor

Desarrollado y mantenido por **Stephano Rojas Camoretti**.
*AI Solutions Architect & Growth Engineer*
Construyo sistemas y arquitecturas de crecimiento que combinan alto rendimiento técnico con impacto comercial real.

[LinkedIn](https://www.linkedin.com/in/stephanocamoretti/) | [GitHub](https://github.com/stephanocamoretti-dotcom) | [Portafolio](https://stephano-portfolio.vercel.app/)
