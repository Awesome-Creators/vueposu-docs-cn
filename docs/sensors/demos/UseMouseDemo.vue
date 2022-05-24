<template>
  <div class="demo">
    <p>pageX: {{ pageX }}</p>
    <p>pageY: {{ pageY }}</p>
    <p>screenX: {{ screenX }}</p>
    <p>screenY: {{ screenY }}</p>
    <p>clientX: {{ clientX }}</p>
    <p>clientY: {{ clientY }}</p>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from "vueposu";

const { pageX, pageY, screenX, screenY, clientX, clientY } = useMouse();
</script>