<template>
  <div class="demo">
    <p>计数: {{ count }}</p>
    <p style="margin-top: 12px">
      <button @click="throttled">快速点击我!</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useThrottleFn } from "vueposu";

const count = ref(0);
const throttled = useThrottleFn(() => count.value++, 400);
</script>
