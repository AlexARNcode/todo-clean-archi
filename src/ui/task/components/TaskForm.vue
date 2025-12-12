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
  <form @submit.prevent="submit" class="mb-12 flex gap-2">
    <input 
      v-model="title" 
      placeholder="Add a new task..." 
      class="flex-1 px-4 py-2 border-2 border-black rounded text-black placeholder-gray-600 focus:outline-none"
    />
    <button 
      type="submit"
      class="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
    >
      Add
    </button>
  </form>
</template>
