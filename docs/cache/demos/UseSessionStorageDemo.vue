<template>
  <div class="demo">
    <p>name: <input v-model="state.name" /></p>
    <p>type: <input v-model="state.type" /></p>
    <p><pre lang="json">{{JSON.stringify(state, null, 2)}}</pre></p>
  </div>
</template>

<script setup lang="ts">
import { useSessionStorage } from "vueposu";

const state = useSessionStorage('useSessionStorage-demo-state', {
  name: 'Jerry',
  type: 'Mouse'
});
</script>