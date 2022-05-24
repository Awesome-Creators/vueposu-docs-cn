<template>
  <div class="demo">
    <p>name: <input v-model="state.name" /></p>
    <p>type: <input v-model="state.type" /></p>
    <p><pre lang="json">{{JSON.stringify(state, null, 2)}}</pre></p>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from "vueposu";

const state = useLocalStorage('useLocalStorage-demo-state', {
  name: 'Tom',
  type: 'Cat'
});
</script>