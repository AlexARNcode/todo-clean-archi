<script setup lang="ts">
import TaskForm from "@/ui/task/components/TaskForm.vue";
import TaskList from "@/ui/task/components/TaskList.vue";
import { useTasks } from "@/ui/task/composables/useTasks";

const { tasks, load, create, toggle, remove } = useTasks();

load();
</script>

<template>
  <section class="bg-white p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-black mb-8">Tasks</h1>

      <TaskForm @submit="create" />

      <TaskList
        :tasks="tasks"
        :onToggle="toggle"
        :onDelete="remove"
      />
    </div>
  </section>
</template>
