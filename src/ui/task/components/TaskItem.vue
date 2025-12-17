<script setup lang="ts">
import type { TaskDTO } from "@/ui/task/adapters/TaskAdapter";
import { TaskStatus } from "@/domain/task/TaskStatus";

defineProps<{
  task: TaskDTO;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}>();
</script>

<template>
  <li :class="['border-4 border-black p-6 rounded-lg mb-4 w-64 transition-colors', task.status === TaskStatus.DONE ? 'bg-gray-300' : 'bg-white']">
    <label class="flex items-start gap-3">
      <input
        type="checkbox"
        :checked="task.status === TaskStatus.DONE"
        @change="onToggle(task.id)"
        class="w-5 h-5 cursor-pointer mt-1 accent-black"
      />
      <span 
        class="text-black font-semibold text-lg flex-1"
        :class="{ 'line-through text-gray-500': task.status === TaskStatus.DONE }"
      >
        {{ task.title }}
      </span>
    </label>

    <button 
      @click="onDelete(task.id)"
      class="mt-4 w-full py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors text-sm"
    >
      Delete
    </button>
  </li>
</template>
