<script setup lang="ts">
import type { Task } from "@/domain/task/Task";

defineProps<{
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}>();
</script>

<template>
  <li class="task-item">
    <label>
      <input
        type="checkbox"
        :checked="task.status === 'DONE'"
        @change="onToggle(task.id.value)"
      />
      <span :class="{ done: task.status === 'DONE' }">
        {{ task.title.value }}
      </span>
    </label>

    <button @click="onDelete(task.id.value)">Delete</button>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
