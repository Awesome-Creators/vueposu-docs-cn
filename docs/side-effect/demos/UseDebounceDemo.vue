<template>
  <div class="demo">
    <p>输入值: <input type="text" v-model="typed" /></p>
    <p>防抖值: {{ debouncedValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDebounce } from "vueposu";

const typed = ref("");
const debouncedValue = useDebounce(typed, 400);
</script>
