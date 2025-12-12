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
  <div v-if="tasks.length === 0" class="text-center py-12 text-gray-600">
    <p class="text-lg">No tasks yet. Add one to get started!</p>
  </div>
  <ul v-else class="flex flex-wrap gap-4">
    <TaskItem
      v-for="task in tasks"
      :key="task.id.value"
      :task="task"
      :onToggle="onToggle"
      :onDelete="onDelete"
    />
  </ul>
</template>
