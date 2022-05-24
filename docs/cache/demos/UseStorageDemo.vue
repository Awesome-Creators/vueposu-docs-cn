<template>
  <div class="demo">
    <p><input v-model="state[0]" /></p>
    <p><input v-model="state[1]" /></p>
    <p><input v-model="state[2]" /></p>
    <p><pre lang="json">{{JSON.stringify(state, null, 2)}}</pre></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStorage } from "vueposu";

const state = useStorage('useStorage-demo-state', ['Tom', 'and', 'Jerry']);
</script>