<template>
  <div class="demo">
    <p>当前状态: {{ state }}</p>
    <p style="margin-top: 12px;">
      <button @click="toggle()">切换状态</button
      ><button @click="setLeft">设置为 左边</button
      ><button @click="setRight">设置为 右边</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from "vueposu";

const { state, toggle, setLeft, setRight } = useToggle("左边", "右边");
</script>
