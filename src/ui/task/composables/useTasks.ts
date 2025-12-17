import { ref } from "vue";
import { taskRepository } from "@/infrastructure/repositories";

import { TaskUseCaseFactory } from "@/application/task/factories/TaskUseCaseFactory";
import { TaskAdapter, type TaskDTO } from "@/ui/task/adapters/TaskAdapter";

const repo = taskRepository;

export function useTasks() {
  const tasks = ref<TaskDTO[]>([]);

  const factory = new TaskUseCaseFactory(repo);
  const listTasks = factory.createListTasks();
  const createTask = factory.createCreateTask();
  const deleteTask = factory.createDeleteTask();
  const toggleTask = factory.createToggleTaskStatus();

  function load() {
    const fetchedTasks = listTasks.execute();
    tasks.value = fetchedTasks.map(TaskAdapter.toDTO);
  }

  function create(title: string) {
    createTask.execute({ title });
    load();
  }

  function toggle(id: string) {
    toggleTask.execute({ id });
    load();
  }

  function remove(id: string) {
    deleteTask.execute({ id });
    load();
  }

  return { tasks, load, create, toggle, remove };
}
