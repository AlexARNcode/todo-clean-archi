import type { TaskRepository } from "@/domain/task/TaskRepository";
import { Task } from "@/domain/task/Task";
import type { TaskId } from "@/domain/task/TaskId";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async save(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async findAll(): Promise<Task[]> {
    return [...this.tasks]; 
  }

    async delete(id: TaskId): Promise<void> {
        this.tasks = this.tasks.filter(t => t.id.value !== id.value);
    }
}
