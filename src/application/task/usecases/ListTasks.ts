import type { Task } from "@/domain/task/Task";
import type { TaskRepository } from "@/domain/task/TaskRepository";

export class ListTasks {
  constructor(private readonly repo: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.repo.findAll();
  }
}
