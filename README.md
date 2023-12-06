# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Guide line

Run project
`npm run dev`

Root component:
- src/pages/DemoForm

This component will describe how we can use `provide/inject` in our projects. Also describe the flow how we can interact with API

Root component `src/pages/DemoForm` is a page, it will has many components inside, in order to be access the reactive variable from all component levels. We can use `provide/inject`. By this way we can directly access to the provided variable instead of passing many components level.
