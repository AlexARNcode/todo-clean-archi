import type { TaskRepository } from "@/domain/task/TaskRepository";
import { CreateTask } from "@/application/task/usecases/CreateTask";
import { ListTasks } from "@/application/task/usecases/ListTasks";
import { DeleteTask } from "@/application/task/usecases/DeleteTask";
import { ToggleTaskStatus } from "@/application/task/usecases/ToggleTaskStatus";

export class TaskUseCaseFactory {
  constructor(private readonly repo: TaskRepository) {}

  createListTasks(): ListTasks {
    return new ListTasks(this.repo);
  }

  createCreateTask(): CreateTask {
    return new CreateTask(this.repo);
  }

  createDeleteTask(): DeleteTask {
    return new DeleteTask(this.repo);
  }

  createToggleTaskStatus(): ToggleTaskStatus {
    return new ToggleTaskStatus(this.repo);
  }
}
