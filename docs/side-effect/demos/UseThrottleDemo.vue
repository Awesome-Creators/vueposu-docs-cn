<template>
  <div class="demo">
    <p>输入值: <input type="text" v-model="typed" /></p>
    <p>节流值: {{ throttledValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useThrottle } from "vueposu";

const typed = ref("");
const throttledValue = useThrottle(typed, 400);
</script>
