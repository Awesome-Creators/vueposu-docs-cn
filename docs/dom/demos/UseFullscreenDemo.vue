<template>
  <div class="demo" ref="container">
    <p>当前全屏状态: {{ isFullscreen }}</p>
    <p>全屏次数: {{ count }}</p>
    <p style="margin-top: 12px;">
      <button @click="enterFullscreen">进入全屏</button>
      <button @click="exitFullscreen">退出全屏</button>
      <button @click="toggleFullscreen()">切换全屏状态</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFullscreen } from "vueposu";

const container = ref();
const count = ref(0);
const { isFullscreen, enterFullscreen, exitFullscreen, toggleFullscreen } =
  useFullscreen(container, () => {
    if (isFullscreen.value) count.value++;
  });
</script>