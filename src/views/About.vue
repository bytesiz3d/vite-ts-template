<template>
  <router-link to="/">Home</router-link>
  <div>About {{ count }}</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class About2 extends Vue {
  get count() {
    return this.$store.state.count;
  }
}
</script>

<style scoped></style>
