<template>
  <div class="demo">
    <template v-if="supported">
      <p>当前剪贴板内容: {{ text }}</p>
      <p>
        <input v-model="input" />
        <button @click="copy(input)">复制</button>
      </p>
    </template>
    <template v-else>
      你的浏览器似乎不支持
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API"
        target="_blank"
        >Clipboard API</a
      >.
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "vueposu";

const input = ref();
const { copy, text, supported } = useClipboard();
</script>
