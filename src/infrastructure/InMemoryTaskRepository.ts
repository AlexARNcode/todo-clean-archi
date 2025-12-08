import type { TaskRepository } from "@/domain/task/TaskRepository";
import { Task } from "@/domain/task/Task";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async save(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async findAll(): Promise<Task[]> {
    return [...this.tasks]; 
  }
}
