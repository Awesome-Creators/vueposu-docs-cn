<template>
  <div class="demo">
    <p>x: {{ x }}</p>
    <p>y: {{ y }}</p>
    <div
      ref="div"
      style="width: 300px; height: 300px; margin-top: 12px; border: 1px solid; overflow: scroll"
    >
      <div style="width: 3000px; height: 3000px"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScroll } from "vueposu";

const div = ref();
const { x, y } = useScroll(div);
</script>
