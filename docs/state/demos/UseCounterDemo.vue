<template>
  <div class="demo">
    <p>计数: {{ count }}</p>
    <p style="font-size: 14px;">
      最小值: <input v-model="min" />最大值: <input v-model="max" />步长:
      <input v-model="step" />
    </p>
    <p style="margin-top: 20px">
      <button @click="inc">增加</button>
      <button @click="inc(1)">增加 1</button>
      <button @click="dec">减少</button>
      <button @click="dec(1)">减少 1</button>
      <button @click="set(6)">设置为 6</button>
      <button @click="reset">重置</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounter } from "vueposu";

const min = ref(1);
const max = ref(10);
const step = ref(2);
const { count, inc, dec, set, reset } = useCounter(2, {
  min,
  max,
  step,
});
</script>
