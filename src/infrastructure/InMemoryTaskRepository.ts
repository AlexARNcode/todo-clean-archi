import type { TaskRepository } from "@/domain/task/TaskRepository";
import { Task } from "@/domain/task/Task";
import type { TaskId } from "@/domain/task/TaskId";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  save(task: Task): void {
    const index = this.tasks.findIndex(t => t.id.value === task.id.value);

    if (index !== -1) {
      this.tasks[index] = task;
    } else {
      this.tasks.push(task);
    }
  }

  findById(id: string): Task | null {
    return this.tasks.find(t => t.id.value === id) ?? null;
  }

  findAll(): Task[] {
    return [...this.tasks];
  }

  delete(id: TaskId): void {
    this.tasks = this.tasks.filter(t => t.id.value !== id.value);
  }
}
