<template>
  <div class="demo">
    <p>计数: {{ count }}</p>
    <p style="margin-top: 12px;">
      <button @click="debounced">快速点击我!</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDebounceFn } from "vueposu";

const count = ref(0);
const debounced = useDebounceFn(() => count.value++, 400);
</script>