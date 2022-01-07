<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <code>
    <h1>{{ msg }}</h1>
  </code>
  <router-link :to="{ name: 'About' }" style="display: block">Eh</router-link>
  <router-link :to="{ name: 'About - Composition' }" style="display: block">
    Eh Composition
  </router-link>
  <button @click="increment">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "@/store";
const store = useStore();
const count = computed(() => store?.state.count);

const increment = () => store.dispatch("increment");

defineProps<{ msg: string }>();
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
  font-family: "SF Mono";
}
</style>
