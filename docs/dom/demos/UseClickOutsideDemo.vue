<template>
  <div class="demo">
    <p>count: {{ count }}</p>
    <p style="margin-top: 12px;">
      <button ref="a">don't click me</button>
      <button ref="b">click me outside</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClickOutside } from "vueposu";

const count = ref(0);
const a = ref();
const b = ref();

useClickOutside([a, b], () => count.value++);
</script>
