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

  async function load() {
    const fetchedTasks = await listTasks.execute();
    tasks.value = fetchedTasks.map(TaskAdapter.toDTO);
  }

  async function create(title: string) {
    await createTask.execute({ title });
    await load();
  }

  async function toggle(id: string) {
    await toggleTask.execute({ id });
    await load();
  }

  async function remove(id: string) {
    await deleteTask.execute({ id });
    await load();
  }

  return { tasks, load, create, toggle, remove };
}
