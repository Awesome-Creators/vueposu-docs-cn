<template>
  <div class="demo">
    <p><input type="text" v-model="text" /><button @click="list.splice(0)">清除缓存</button></p>
    <p style="margin-top: 12px;">
      节流缓存列表:
      <ul>
        <li v-for="t in list">{{ t }}</li>
      </ul>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useThrottleEffect } from "vueposu";

const text = ref('');
const list = reactive([]);

useThrottleEffect(() => {
  list.push(text.value);
}, text, 400);
</script>