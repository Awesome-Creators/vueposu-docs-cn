<template>
  <div class="demo">
    <p>
      当前标题: <input v-model="title" placeholder="输入文本修改页面标题" />
      <button @click="restoreTitle">恢复标题</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from "vueposu";

const { title, restoreTitle } = useTitle("自定义标题", false);
</script>
