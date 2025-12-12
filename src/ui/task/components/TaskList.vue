<script setup lang="ts">
import type { Task } from "@/domain/task/Task";
import type { ToggleTaskStatus } from "@/application/task/usecases/ToggleTaskStatus";
import type { DeleteTask } from "@/application/task/usecases/DeleteTask";
import TaskItem from "@/ui/task/components/TaskItem.vue"

defineProps<{
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}>();
</script>
 
<template>
  <ul>
    <TaskItem
      v-for="task in tasks"
      :key="task.id.value"
      :task="task"
      :onToggle="onToggle"
      :onDelete="onDelete"
    />
  </ul>
</template>
