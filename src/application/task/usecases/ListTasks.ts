import type { Task } from "@/domain/task/Task";
import type { TaskRepository } from "@/domain/task/TaskRepository";

export class ListTasks {
  constructor(private readonly repo: TaskRepository) {}

  execute(): Task[] {
    return this.repo.findAll();
  }
}
