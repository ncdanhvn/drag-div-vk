<template>
  <div class="wrapper">
    <div class="drop-box">
      <ul>
        Drop items here
        <li v-for="item in dropList">{{ item }}</li>
      </ul>
    </div>
    <div
      v-for="label in labelList"
      class="label"
      :style="{ top: `${label.x}px`, left: `${label.y}px` }"
    >
      {{ label.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Label, generateLabels } from "./utils";

const dropList = ref<string[]>([]);
const labelList = ref<Label[]>([]);

labelList.value = generateLabels();
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
