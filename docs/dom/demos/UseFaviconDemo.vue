<template>
  <div class="demo">
    <span class="upload">
      <img v-if="icon" :src="icon" />
      <template v-else>上传 Icon</template>
      <input type="file" @change="change" />
    </span>
    <button v-if="icon" @click="restore">复原 Icon</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useFavicon } from "vueposu";

const icon = ref();
const { changeIcon, restoreIcon } = useFavicon();
const change = ({ target }: Event) => {
  const file = target.files[0];
  if (file && file.type.indexOf("image") === 0) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (theFile) => {
      icon.value = theFile.target.result;
      setTimeout(() => {
        target.value = null;
      });
    };
  }
};
const restore = () => {
  icon.value = null;
  restoreIcon();
};
watch(icon, () => {
  if (icon.value) {
    changeIcon(icon.value);
  }
});
</script>
