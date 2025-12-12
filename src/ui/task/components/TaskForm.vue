<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "submit", title: string): void;
}>();

const title = ref("");

function submit() {
  if (!title.value.trim()) return;
  emit("submit", title.value);
  title.value = "";
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="title" placeholder="New task..." />
    <button type="submit">Add</button>
  </form>
</template>
