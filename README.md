# Installation
After pulling the code, execute `yarn` in the root directory of the project. After success, execute `yarn dev` to start the project (nodejs + npm needs to be installed)

# Based on
- [vite-ts-quick](https://github.com/pohunchn/vite-ts-quick)

# Built-in
* Cookie
* Storage
* [vue-router](https://next.router.vuejs.org/)
* [vuex](https://next.vuex.vuejs.org/)

# How to use vue3

## Vue 3 + Typescript + Vite
This template should help get you started developing with Vue 3 and Typescript in Vite.

### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (disable Vetur). 

### Type Support For `.vue` Imports in TS
Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

- Run `Volar: Switch TS Plugin on/off` from VSCode command palette.
