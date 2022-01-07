<template>
  <router-link to="/"> Home </router-link>
  <div>About {{ count }}</div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { computed } from "vue";

const store = useStore();
const count = computed(() => store.state.count);

setInterval(() => store.dispatch("increment"), 1000);
</script>

<style scoped></style>
