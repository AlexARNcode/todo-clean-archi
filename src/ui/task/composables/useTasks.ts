import { ref } from "vue";
import { taskRepository } from "@/infrastructure/repositories";

import { CreateTask } from "@/application/task/usecases/CreateTask";
import { ListTasks } from "@/application/task/usecases/ListTasks";
import { DeleteTask } from "@/application/task/usecases/DeleteTask";
import { ToggleTaskStatus } from "@/application/task/usecases/ToggleTaskStatus";
import { TaskAdapter, type TaskDTO } from "@/ui/task/adapters/TaskAdapter";

const repo = taskRepository;

export function useTasks() {
  const tasks = ref<TaskDTO[]>([]);

  const listTasks = new ListTasks(repo);
  const createTask = new CreateTask(repo);
  const deleteTask = new DeleteTask(repo);
  const toggleTask = new ToggleTaskStatus(repo);

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
