<template>
  <div class="demo">
    <p>
      <input type="text" v-model="name" />
      <button @click="emit(name)">打个招呼吧!</button>
    </p>
    <p style="margin-top: 12px">你好, {{ respond }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEventEmitter } from "vueposu";

const name = ref("Tom");
const respond = ref("");
const { emit, on } = useEventEmitter();

on((v) => (respond.value = v));
</script>
