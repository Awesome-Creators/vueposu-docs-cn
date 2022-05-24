<template>
  <div class="demo">如果更改此页面显示状态, 你将看到页面标题更改.</div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { usePageHidden, useTitle } from "vueposu";

const { title, restoreTitle } = useTitle(document.title, false);
const isHidden = usePageHidden();
watch(isHidden, () => {
  if (isHidden.value) {
    title.value = "页面隐藏了!";
  } else {
    restoreTitle();
  }
});
</script>
