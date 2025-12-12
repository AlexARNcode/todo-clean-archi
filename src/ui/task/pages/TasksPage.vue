<script setup lang="ts">
import TaskForm from "@/ui/task/components/TaskForm.vue";
import TaskList from "@/ui/task/components/TaskList.vue";
import { useTasks } from "@/ui/task/composables/useTasks";

const { tasks, load, create, toggle, remove } = useTasks();

load();
</script>

<template>
  <section>
    <h1>Tasks</h1>

    <TaskForm @submit="create" />

    <TaskList
      :tasks="tasks"
      :onToggle="toggle"
      :onDelete="remove"
    />
  </section>
</template>
