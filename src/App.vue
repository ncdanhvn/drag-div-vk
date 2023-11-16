<template>
  <div class="wrapper">
    <div
      class="drop-box"
      @drop.prevent="onDrop($event)"
      @dragenter.prevent
      @dragover.prevent
    >
      <ul>
        Drop items here
        <li v-for="item in dropList">{{ item }}</li>
      </ul>
    </div>
    <p>Count is: {{ count }}</p>
    <div
      v-for="label in labelList"
      class="label"
      :style="{ top: `${label.x}px`, left: `${label.y}px` }"
      draggable="true"
      @dragstart="handleDragStart($event, label)"
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

const count = ref(0);

labelList.value = generateLabels();

const handleDragStart = (event: DragEvent, label: Label) => {
  event.dataTransfer?.setData("text/plain", label.name);
};

const onDrop = (event: DragEvent) => {
  count.value++;
  console.log(event.dataTransfer?.getData("text/plain"));
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
